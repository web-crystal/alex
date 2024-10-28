export interface IRepository {
  id: number
  // node_id: string
  preview_img: string
  img: string
  name: string
  // full_name: string
  description: string
  html_url: string
  // stargazers_url: string
  // forks_url: string
  homepage?: string
  // stargazers_count: string
  // watchers_count: number
  // forks_count: number
  // created_at: string
  // updated_at: string
  // pushed_at: string
  last_commit_at: string
  // last_commit_date: Date
  languages: { name: string; size: number }[]
  topics: string[]
  role: string
  // license?: { key: string; name: string; spdx_id: string; url: string; node_id: string }
}
