import { DouyinApi } from '../api/douyin'
import { streamChat } from '../api/openai'

export class TravelAssistant {
  async *planTrip(destination: string, prompt: string) {
    // 1. 搜索抖音获取攻略
    const searchResults = await DouyinApi.search(`${destination} 旅游攻略`)

    // 2. 构建完整的 prompt
    const fullPrompt = `
    目的地: ${destination}
    用户需求: ${prompt}
    
    我找到了以下抖音攻略信息:
    ${JSON.stringify(searchResults, null, 2)}
    
    请帮我:
    1. 分析抖音攻略内容
    2. 规划合适的行程路线
    3. 推荐住宿选择
    4. 给出具体的建议
    `

    // 3. 使用 OpenAI 生成建议
    for await (const chunk of streamChat(fullPrompt)) {
      yield chunk
    }
  }
}
