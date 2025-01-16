import OpenAI from 'openai'
import readline from 'readline'
import { DouyinApi } from './src/api/douyin'
import type { SimplifiedVideoInfo } from './src/api/douyin'

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: 'https://api.deepseek.com/v1',
})

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})


async function analyzeSearchKeyword(input: string) {
  const completion = await openai.chat.completions.create({
    model: 'deepseek-chat',
    messages: [
      {
        role: 'system',
        content:
          `你是一个抖音搜索调用者。将用户的意愿和期望转化为搜索关键词，帮助用户获取更好的信息
          
          Prompts: 
          - 用户输入: {input}
          - 返回结果: { "keyword": "{将用户的意愿提取成搜索关键词}" }
          `,
      },
      {
        role: 'user',
        content: input,
      },
    ],
    temperature: 0.7,
    stream: true,
  })

  let result = ''
  for await (const chunk of completion) {
    const content = chunk.choices[0]?.delta?.content || ''
    result += content
  }
  return result
}

async function analyzeSearchResults(results: SimplifiedVideoInfo[]) {
  const completion = await openai.chat.completions.create({
    model: 'deepseek-chat',
    messages: [
      {
        role: 'system',
        content: `你是一个专业的内容分析助手，对每个视频的内容、评论、作者信息都进行分析。最后以JSON格式返回其分析结果`
      },
      {
        role: 'user',
        content: `请分析以下抖音视频搜索结果，总结主要内容、热门话题和用户反馈：
          ${JSON.stringify(results, null, 2)}`
      }
    ],
    temperature: 0.7,
    stream: true,
  })

  let result = ''
  for await (const chunk of completion) {
    const content = chunk.choices[0]?.delta?.content || ''
    result += content
    process.stdout.write(content)
  }
  process.stdout.write('\n')
  return result
}

export async function chat() {
  const messages: Array<{ role: string; content: string }> = [
    {
      role: 'system',
      content: '你是一个专业的社交平台分析助手，可以帮助用户搜索信息并给出建议。'
    },
  ]

  const userInput = await new Promise<string>((resolve) => {
    rl.question('You: ', resolve)
  })

  if (userInput.toLowerCase() === 'exit') {
    rl.close()
  }

  messages.push({
    role: 'user',
    content: userInput,
  })

  process.stdout.write('Assistant: ')

  try {
    const keyword = JSON.parse(await analyzeSearchKeyword(userInput)).keyword
    process.stdout.write(keyword)
    process.stdout.write('\n')
    const searchResults = await DouyinApi.search(keyword)
    const analysis = await analyzeSearchResults(searchResults)

    messages.push({
      role: 'assistant',
      content: analysis,
    })
  } catch (error) {
    console.error('Error:', error)
    console.log('抱歉，搜索过程中出现错误。')
  }
}

chat()
