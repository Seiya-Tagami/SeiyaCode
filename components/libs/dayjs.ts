import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import 'dayjs/locale/ja'

import { THistory, TRecentActivity } from '../features/Top/partials'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Tokyo')
dayjs.locale('ja')

export const format1 = (v: string | Date) => {
  const date = dayjs(v).format('YYYY/MM')

  return date
}

export const format2 = (v: string | Date) => {
  const date = dayjs(v).format('MM')

  return date
}

// sort by date
export const sortByDate = <T>(v: T extends THistory ? THistory[] : TRecentActivity[]) => {
  const results = [...v]
  results.sort((a, b) => {
    const dayOne = dayjs(a.start_date)
    const dayTwo = dayjs(b.start_date)

    if (dayOne.isAfter(dayTwo)) {
      return 1
    } else {
      return -1
    }
  })

  return results
}
