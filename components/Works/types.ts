import { THero } from "components/common/types"

export type TWork = {
  id: string
  title: string
  span: string
  desc: string
  stacks: string
  img_path: string
  product_url: string
}

export type WorksData = {
  hero: THero,
  works: TWork[]
}