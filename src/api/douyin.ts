import client from './client'

export interface SimplifiedVideoInfo {
  title: string
  author: {
    nickname: string
    avatar: string
    followers: number
  }
  stats: {
    likes: number
    comments: number
    shares: number
    plays: number
  }
  cover: string
  shareUrl: string
  createdAt: number
  comments: any[]
}

interface CommentInfo {
  text: string;
  digg_count: number;
  user: {
    nickname: string;
    avatar_thumb: {
      url_list: string[];
    };
  };
  ip_label: string;
  reply_comment?: {
    text: string;
    label_text: string;
  }[];
}

interface CommentResponse {
  comments: CommentInfo[];
}

export const DouyinApi = {
  search: async (keyword: string) => {
    const response = await client<ITiktokSearchResponse>({
      method: 'GET',
      url: '/aweme/v1/web/general/search/single',
      params: {
        keyword,
        device_platform: 'webapp',
        aid: 6383,
        channel: 'channel_pc_web',
        search_channel: 'aweme_general',
        enable_history: 1,
        search_source: 'normal_search',
        query_correct_type: 1,
        is_filter_search: 0,
        from_group_id: '',
        offset: 0,
        count: 20,
        need_filter_settings: 1,
        list_type: 'single',
        update_version_code: 170400,
        pc_client_type: 1,
        pc_libra_divert: 'Mac',
        version_code: 190600,
        version_name: '19.6.0',
        cookie_enabled: true,
        browser_language: 'zh-CN',
        browser_platform: 'MacIntel',
        browser_name: 'Chrome',
        browser_version: '131.0.0.0',
        browser_online: true,
        engine_name: 'Blink',
        engine_version: '131.0.0.1',
        os_name: 'Mac OS',
        os_version: '10.15.7',
        cpu_core_num: 12,
        device_memory: 8,
        platform: 'PC',
        downlink: 10,
        effective_type: '4g',
        round_trip_time: 150,
      },
    })

    // 获取每个视频的评论信息
    const videosWithComments = await Promise.all(
      response.data.map(async (item) => {
        const commentResponse = await DouyinApi.getCommentList(item.aweme_info.aweme_id)
        return {
          ...item,
          comments: commentResponse?.comments?.map((comment) => ({
            content: comment.text,
            likes: comment.digg_count,
            username: comment.user.nickname,
            avatar: comment.user.avatar_thumb.url_list[0],
            ip_label: comment.ip_label,
            reply_comment: comment.reply_comment?.map((reply) => ({
              text: reply.text,
              label_text: reply.label_text,
            })),
          })) || [],
        }
      })
    )


    // 转换为简化格式
    const simplifiedResults: SimplifiedVideoInfo[] = videosWithComments.map(
      (item) => ({
        title: item.aweme_info.desc,
        author: {
          nickname: item.aweme_info.author.nickname,
          avatar: item.aweme_info.author.avatar_thumb.url_list[0],
          followers: item.aweme_info.author.follower_count,
        },
        stats: {
          likes: item.aweme_info.statistics.digg_count,
          comments: item.aweme_info.statistics.comment_count,
          shares: item.aweme_info.statistics.share_count,
          plays: item.aweme_info.statistics.play_count,
        },
        cover: item.aweme_info.video.cover.url_list[0],
        shareUrl: item.aweme_info.share_info.share_url,
        createdAt: item.aweme_info.create_time,
        comments: item.comments,
      })
    )

    return simplifiedResults
  },
  getVideoDetail: async (aweme_id: string) => {
    const response = await client<ITiktokSearchResponse>({
      method: 'GET',
      url: '/aweme/v1/web/aweme/detail/',
      params: {
        device_platform: 'webapp',
        aid: 6383,
        channel: 'channel_pc_web',
        aweme_id,
        update_version_code: 170400,
        pc_client_type: 1,
        pc_libra_divert: 'Mac',
        version_code: 190500,
        version_name: '19.5.0',
        cookie_enabled: true,
        screen_width: 1728,
        screen_height: 1117,
        browser_language: 'zh-CN',
        browser_platform: 'MacIntel',
        browser_name: 'Chrome',
        browser_version: '131.0.0.0',
        browser_online: true,
        engine_name: 'Blink',
        engine_version: '131.0.0.0',
        os_name: 'Mac OS',
        os_version: '10.15.7',
        cpu_core_num: 12,
        device_memory: 8,
        platform: 'PC',
        downlink: 10,
        effective_type: '4g',
        round_trip_time: 100,
      },
    })
    return response
  },
  getCommentList: async (aweme_id: string, cursor: number = 0) => {
    const response = await client<CommentResponse>({
      method: 'GET',
      url: '/aweme/v1/web/comment/list/',
      params: {
        device_platform: 'webapp',
        aid: 6383,
        channel: 'channel_pc_web',
        aweme_id,
        cursor,
        count: 20,
        item_type: 0,
        insert_ids: '',
        whale_cut_token: '',
        cut_version: 1,
        rcFT: '',
        update_version_code: 170400,
        pc_client_type: 1,
        pc_libra_divert: 'Mac',
        version_code: 170400,
        version_name: '17.4.0',
        cookie_enabled: true,
        screen_width: 1728,
        screen_height: 1117,
        browser_language: 'zh-CN',
        browser_platform: 'MacIntel',
        browser_name: 'Chrome',
        browser_version: '131.0.0.0',
        browser_online: true,
        engine_name: 'Blink',
        engine_version: '131.0.0.0',
        os_name: 'Mac OS',
        os_version: '10.15.7',
        cpu_core_num: 12,
        device_memory: 8,
        platform: 'PC',
        downlink: 10,
        effective_type: '4g',
        round_trip_time: 100,
      },
    })
    return response
  },
}