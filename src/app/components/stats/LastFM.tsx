'use client'
import styles from './styles.module.scss'

import Image from 'next/image'
import Icon from '@mdi/react'
import { mdiFinance } from '@mdi/js'

import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'

import { LastFMResponseType } from '@/lib/lastfm'

const LastFM: React.FC<{ fallbackData: LastFMResponseType; color: string }> = ({
  fallbackData,
  color,
}) => {
  const { data } = useSWR<LastFMResponseType>('/api/lastfm', fetcher, {
    fallbackData,
    refreshInterval: 30000,
  })

  return (
    <>
      <div className={`${styles.root} ${styles['track-count']}`}>
        {data?.weekly.image && (
          <Image
            src={data.weekly.image ?? '??'}
            alt={data?.weekly.name ?? '??'}
            className={styles.aotw}
            width={32}
            height={32}
          />
        )}
        <p>
          Album of the week:<strong> {data?.weekly.name}</strong> by{' '}
          <strong>{data?.weekly.artist}</strong> ({data?.weekly.count} tracks
          played
          {(data?.weekly.percentage ?? 0) > 0.0099 &&
            `,  ${data?.weekly.percentage?.toFixed(2)}% of album totals`}
          )
        </p>
      </div>
      <div className={`${styles.root} ${styles['track-count']}`}>
        <Icon path={mdiFinance} size={1} style={{ color }} />
        <p>
          <strong>
            {Intl.NumberFormat('nl-NL').format(data?.overall.play_count ?? 0)}
          </strong>{' '}
          lifetime recorded plays.
        </p>
      </div>
    </>
  )
}

export default LastFM
