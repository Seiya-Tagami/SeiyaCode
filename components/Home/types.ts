import { ComponentWithAs, IconProps } from '@chakra-ui/react'
import { THero } from 'components/common/types'

export type THistory = {
  date: string,
  text: string,
  icon: ComponentWithAs<"svg", IconProps>
}

export type TSkill = {
  title: string,
  imgPath: string,
  alt: string
}

export type HomeData = {
  hero: THero,
  history: THistory[],
  skills: TSkill[]
}
