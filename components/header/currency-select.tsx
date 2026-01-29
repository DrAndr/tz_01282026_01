'use client'

import { useCurrency } from '@/app/providers'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { CURRENCIES, CURRENCY_COOKIE_NAME, CURRENCY_SYMBOLS, DEFAULT_CURRENCY } from '@/lib/constants'
import type { Currency } from '@/lib/types'

export function CurrencySelect() {
  const { currency, setCurrency } = useCurrency()

  function onChangeCurrency(newCurrency: Currency) {
    setCurrency(newCurrency)
    document.cookie = `${CURRENCY_COOKIE_NAME}=${newCurrency}; path=/; max-age=31536000`
  }

  const currencyToView = currency || DEFAULT_CURRENCY

  return (
    <Select value={currency} onValueChange={onChangeCurrency}>
      <SelectTrigger className="w-[120px]">
        <SelectValue>
          {currencyToView} {CURRENCY_SYMBOLS[currencyToView]}
        </SelectValue>
      </SelectTrigger>

      <SelectContent>
        {CURRENCIES.map((c) => (
          <SelectItem key={c} value={c}>
            {c} {CURRENCY_SYMBOLS[c]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
