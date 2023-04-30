import { THero } from 'components/common/types'


export type TSkill = {
  title: string,
  imgPath: string,
  alt: string
}

export type HomeData = {
  hero: THero,
  skills: TSkill[]
}
