'use client'

import { Top } from './Top'
import { supabase } from '@/config/supabase'

export const recentActivityQueryData = async () => {
  try {
    const { data, error } = await supabase.from('recent_activity').select('*')
    if (error) throw error
    return data
  } catch (e) {
    if (e instanceof Error) console.log(e.message)
    return []
  }
}

export const historyQueryData = async () => {
  try {
    const { data, error } = await supabase.from('history').select('*')
    if (error) throw error
    return data
  } catch (e) {
    if (e instanceof Error) console.log(e.message)
    return []
  }
}

export const TopContainer = async () => {
  const contentMap: { [val: string]: any } = new Map([
    ['recentActivity', []],
    ['history', []],
  ])
  const recentActivityData = await recentActivityQueryData()
  const historyData = await historyQueryData()
  contentMap['recentActivity'] = recentActivityData
  contentMap['history'] = historyData

  return <Top content={contentMap} />
}
