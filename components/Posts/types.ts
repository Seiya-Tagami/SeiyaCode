import { THero } from "components/common/types"

export type TPost = {
  month: string
  articles: TArticle[]
}

export type TArticle = {
  id: string
  title: string
  page: string
  url: string
}

export type PostsData = {
  hero: THero,
  posts: TPost[]
}