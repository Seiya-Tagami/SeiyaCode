'use client'

import { Top } from "./Top"
import { supabase } from "@/config/supabase"

export const historyQueryData = async () => {
  try {
    const { data, error } = await supabase
      .from('history')
      .select('*')
    if (error) throw error
    return data
  } catch (e) {
    if (e instanceof Error) console.log(e.message)
    return []
  }
}

export const TopContainer = async () => {
  const contentMap: { [val: string]: any } = new Map([['history', []]])
  const historyData = await historyQueryData()
  contentMap['history'] = historyData

  return <Top content={contentMap} />
}