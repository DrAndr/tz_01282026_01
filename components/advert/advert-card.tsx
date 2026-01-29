'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { Advert } from '@/lib/types'
import { useCurrency } from '@/app/providers'
import { convertPrice } from '@/lib/utils'
import { CURRENCY_SYMBOLS } from '@/lib/constants'

export function AdvertCard({ advert }: { advert: Advert }) {
  const { currency } = useCurrency()
  const price = convertPrice(advert.price, currency)

  return (
    <Link
      href={`/${advert.id}`}
      className="rounded-xl border p-4 hover:shadow-lg transition bg-white shadow-2xl"
    >
      <div className='preview-wrapper'>
        <Image alt={advert.title} src={advert.image} width={326} height={209} />
      </div>

      <h3 className="font-semibold my-1">{advert.title}</h3>
      <div className='flex justify-between text-center py-4' >
        <span className="text-sm text-muted-foreground">
          {advert.location} · {advert.area} м²
        </span>

        <span className="text-lg font-bold">
          {price.toLocaleString()} {CURRENCY_SYMBOLS[currency]}
        </span>
      </div>


    </Link>
  )
}
