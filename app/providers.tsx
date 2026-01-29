'use client'

import { createContext, useContext, useState } from 'react'
import type { Currency } from '@/lib/types'
import { DEFAULT_CURRENCY } from '@/lib/constants'

const CurrencyContext = createContext<{
  currency: Currency
  setCurrency: (c: Currency) => void
}>({
  currency: DEFAULT_CURRENCY as Currency,
  setCurrency: () => {},
})

export function CurrencyProvider({
  children,
  initCurrency
}: {
  children: React.ReactNode
  initCurrency: Currency
}) {
  const [currency, setCurrency] = useState<Currency>(initCurrency)

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export const useCurrency = () => useContext(CurrencyContext)
