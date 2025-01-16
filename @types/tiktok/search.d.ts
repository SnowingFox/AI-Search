declare interface ITiktokSearchResponse {
  status_code: number
  data: Daum[]
  qc: string
  cursor: number
  has_more: number
  ad_info: AdInfo
  extra: Extra
  log_pb: LogPb
  guide_search_words: GuideSearchWord[]
  global_doodle_config: GlobalDoodleConfig
  polling_time: number
  time_cost: TimeCost
  ops: any
  multi_columns_info: MultiColumnsInfo
  path: string
}

interface Daum {
  type: number
  aweme_info: AwemeInfo
  doc_type: number
  sub_card_list: any
  provider_doc_id: number
  provider_doc_id_str: string
  tab: any
  show_tab: any
  debug_diff_info: DebugDiffInfo
  aweme_list: any
  ecom_goods_list: any
  music_info_list: any
  card_unique_name: string
  ops: any
  qishui_music_list: any
}

interface AwemeInfo {
  aweme_id: string
  desc: string
  create_time: number
  author: Author
  music: Music
  cha_list: any
  video: Video
  user_digged: number
  statistics: Statistics
  status: Status
  text_extra: TextExtra[]
  is_top: number
  share_info: ShareInfo
  video_labels: any
  aweme_type: number
  image_infos: any
  position: any
  uniqid_position: any
  comment_list: any
  author_user_id: number
  geofencing: any
  video_text: any
  collect_stat: number
  label_top_text: any
  promotions: any
  group_id: string
  prevent_download: boolean
  nickname_position: any
  challenge_position: any
  long_video: any
  interaction_stickers: any
  origin_comment_ids: any
  commerce_config_data: any
  video_control: VideoControl
  anchors: any
  rawdata: string
  hybrid_label: any
  geofencing_regions: any
  cover_labels: any
  images?: Image[]
  relation_labels: any
  impression_data: ImpressionData
  social_tag_list: any
  suggest_words?: SuggestWords
  original_images: any
  img_bitrate: any
  video_tag: any
  chapter_list: any
  dislike_dimension_list: any
  standard_bar_info_list: any
  danmaku_control?: DanmakuControl
  image_list: any
  origin_text_extra: any
  packed_clips: any
  tts_id_list: any
  ref_tts_id_list: any
  voice_modify_id_list: any
  ref_voice_modify_id_list: any
  dislike_dimension_list_v2: any
  yumme_recreason: any
  slides_music_beats: any
  jump_tab_info_list: any
  reply_smart_emojis: any
  create_scale_type: any
  entertainment_product_info: EntertainmentProductInfo
  trends_infos: any
  chapter_bar_color: any
  mv_info: any
}

interface Author {
  uid: string
  nickname: string
  avatar_thumb: AvatarThumb
  follow_status: number
  follower_count: number
  total_favorited: number
  custom_verify: string
  room_id: number
  enterprise_verify_reason: string
  followers_detail: any
  platform_sync_info: any
  secret: number
  geofencing: any
  follower_status: number
  cover_url: any
  item_list: any
  new_story_cover: any
  type_label: any
  ad_cover_url: any
  relative_users: any
  cha_list: any
  sec_uid: string
  need_points: any
  homepage_bottom_toast: any
  room_data: string
  can_set_geofencing: any
  room_id_str: string
  white_cover_url: any
  user_tags: any
  ban_user_functions: any
  card_entries: any
  display_info: any
  card_entries_not_display: any
  card_sort_priority: any
  interest_tags: any
  link_item_list: any
  user_permissions: any
  offline_info_list: any
  signature_extra: any
  personal_tag_list: any
  cf_list: any
  im_role_ids: any
  not_seen_item_id_list: any
  follower_list_secondary_information_struct: any
  endorsement_info_list: any
  text_extra: any
  contrail_list: any
  data_label_list: any
  not_seen_item_id_list_v2: any
  special_people_labels: any
  familiar_visitor_user: any
  avatar_schema_list: any
  profile_mob_params: any
  verification_permission_ids: any
  batch_unfollow_relation_desc: any
  batch_unfollow_contain_tabs: any
  creator_tag_list: any
  account_cert_info: string
  private_relation_list: any
}

interface AvatarThumb {
  uri: string
  url_list: string[]
  width: number
  height: number
}

interface Music {
  id: number
  id_str: string
  title: string
  author: string
  album: string
  cover_medium: CoverMedium
  cover_thumb: CoverThumb
  play_url: PlayUrl
  duration: number
  extra: string
  user_count: number
  position: any
  collect_stat: number
  status: number
  owner_id?: string
  owner_nickname: string
  is_original: boolean
  mid: string
  binded_challenge_id: number
  author_position: any
  unshelve_countries: any
  external_song_info: any
  sec_uid?: string
  avatar_thumb?: AvatarThumb2
  artists: any
  lyric_short_position: any
  tag_list: any
  music_chart_ranks: any
  artist_user_infos: any
  musician_user_infos: any
}

interface CoverMedium {
  uri: string
  url_list: string[]
  width: number
  height: number
}

interface CoverThumb {
  uri: string
  url_list: string[]
  width: number
  height: number
}

interface PlayUrl {
  uri: string
  url_list: string[]
  width: number
  height: number
  url_key: string
}

interface AvatarThumb2 {
  uri: string
  url_list: string[]
  width: number
  height: number
}

interface Video {
  play_addr: PlayAddr
  cover: Cover
  height: number
  width: number
  dynamic_cover?: DynamicCover
  origin_cover: OriginCover
  ratio: string
  download_addr?: DownloadAddr
  play_addr_lowbr?: PlayAddrLowbr
  bit_rate?: BitRate[]
  duration: number
  download_suffix_logo_addr?: DownloadSuffixLogoAddr
  has_download_suffix_logo_addr?: boolean
  play_addr_265?: PlayAddr265
  video_model?: string
  tags: any
  big_thumbs?: BigThumb[]
  meta: string
  gaussian_cover?: GaussianCover
  bit_rate_audio: any
  raw_cover?: RawCover
}

interface PlayAddr {
  uri: string
  url_list: string[]
  width: number
  height: number
  url_key: string
  data_size?: number
  file_hash?: string
  file_cs?: string
}

interface Cover {
  uri: string
  url_list: string[]
  width: number
  height: number
}

interface DynamicCover {
  uri: string
  url_list: string[]
  width: number
  height: number
}

interface OriginCover {
  uri: string
  url_list: string[]
  width: number
  height: number
}

interface DownloadAddr {
  uri: string
  url_list: string[]
  width: number
  height: number
  data_size: number
  file_cs: string
}

interface PlayAddrLowbr {
  uri: string
  url_list: string[]
  width: number
  height: number
  url_key: string
  data_size: number
  file_hash: string
  file_cs: string
}

interface BitRate {
  gear_name: string
  quality_type: number
  bit_rate: number
  play_addr: PlayAddr2
  is_h265: number
  is_bytevc1: number
  HDR_type: string
  HDR_bit: string
  FPS: number
  video_extra: string
  format: string
}

interface PlayAddr2 {
  uri: string
  url_list: string[]
  width: number
  height: number
  url_key: string
  data_size: number
  file_hash: string
  file_cs: string
}

interface DownloadSuffixLogoAddr {
  uri: string
  url_list: string[]
  width: number
  height: number
  data_size: number
  file_cs: string
}

interface PlayAddr265 {
  uri: string
  url_list: string[]
  width: number
  height: number
  url_key: string
  data_size: number
  file_hash: string
  file_cs: string
}

interface BigThumb {
  img_num: number
  uri: string
  img_url: string
  img_x_size: number
  img_y_size: number
  img_x_len: number
  img_y_len: number
  duration: number
  interval: number
  fext: string
  uris?: string[]
  img_urls?: string[]
}

interface GaussianCover {
  uri: string
  url_list: string[]
  width: number
  height: number
}

interface RawCover {
  uri: string
  url_list: string[]
  width: number
  height: number
}

interface Statistics {
  comment_count: number
  digg_count: number
  download_count: number
  play_count: number
  share_count: number
  forward_count: number
  live_watch_count: number
  collect_count: number
}

interface Status {
  is_delete: boolean
  allow_share: boolean
  is_private: boolean
  private_status: number
  in_reviewing: boolean
  is_prohibited: boolean
  review_result: ReviewResult
  part_see: number
}

interface ReviewResult {
  review_status: number
}

interface TextExtra {
  start: number
  end: number
  type: number
  hashtag_name: string
  hashtag_id: string
  is_commerce: boolean
}

interface ShareInfo {
  share_url: string
  share_desc: string
  share_title: string
  share_link_desc: string
  share_quote: string
  share_desc_info: string
}

interface VideoControl {
  allow_download: boolean
  share_type: number
  show_progress_bar: number
  draft_progress_bar: number
  allow_duet: boolean
  allow_react: boolean
  prevent_download_type: number
  allow_dynamic_wallpaper: boolean
  timer_status: number
  allow_music: boolean
  allow_stitch: boolean
  allow_douplus: boolean
  allow_share: boolean
  share_grayed: boolean
  download_ignore_visibility: boolean
  duet_ignore_visibility: boolean
  share_ignore_visibility: boolean
  download_info: DownloadInfo
  duet_info: DuetInfo
  allow_record: boolean
  disable_record_reason: string
  timer_info: TimerInfo
}

interface DownloadInfo {
  level: number
  fail_info?: FailInfo
}

interface FailInfo {
  code: number
  reason: string
  msg?: string
}

interface DuetInfo {
  level: number
  fail_info?: FailInfo2
}

interface FailInfo2 {
  code: number
  reason: string
}

interface TimerInfo {
  timer_status: number
}

interface Image {
  uri: string
  url_list: string[]
  download_url_list: string[]
  height: number
  width: number
  mask_url_list: any
  interaction_stickers: any
}

interface ImpressionData {
  group_id_list_a: any
  group_id_list_b: any
  similar_id_list_a?: number[]
  similar_id_list_b?: number[]
  group_id_list_c?: number[]
}

interface SuggestWords {
  suggest_words: SuggestWord[]
}

interface SuggestWord {
  words?: Word[]
  scene: string
  icon_url: string
  hint_text: string
  extra_info: string
}

interface Word {
  word: string
  word_id: string
  info: string
}

interface DanmakuControl {
  enable_danmaku: boolean
  post_privilege_level: number
  is_post_denied: boolean
  post_denied_reason: string
  activities: any
}

interface EntertainmentProductInfo {
  sub_title: any
  market_info: MarketInfo
  biz: number
}

interface MarketInfo {
  limit_free: LimitFree
  marketing_tag: any
}

interface LimitFree {
  in_free: boolean
}

interface DebugDiffInfo { }

interface AdInfo { }

interface Extra {
  now: number
  logid: string
  fatal_item_ids: any[]
  search_request_id: string
}

interface LogPb {
  impr_id: string
}

interface GuideSearchWord {
  id: string
  word: string
  type: string
  query_id: string
  attached_text: any
}

interface GlobalDoodleConfig {
  keyword: string
  filter_settings: FilterSetting[]
}

interface FilterSetting {
  title: string
  name: string
  log_name: string
  default_index: number
  android_version: number
  ios_version: number
  lite_android_version: number
  lite_ios_version: number
  enable_lite: boolean
  huoshan_android_version: number
  huoshan_ios_version: number
  enable_huo_shan: boolean
  items: Item[]
  search_nil_text?: SearchNilText
  search_less_text?: SearchLessText
  filter_style?: number
}

interface Item {
  title: string
  value: string
  log_value: string
  show_dot?: number
}

interface SearchNilText {
  info: string
  jump_text: string
}

interface SearchLessText {
  info: string
  jump_text: string
}

interface TimeCost {
  stream_inner: number
}

interface MultiColumnsInfo {
  is_multi_columns: boolean
  group_tag: string
}
