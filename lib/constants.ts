import { type Currency } from "./types"

export const CURRENCIES = ['THB', 'USD', 'EUR', 'RUB'] as const

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  THB: '฿',
  USD: '$',
  EUR: '€',
  RUB: '₽',
}

/**
 * Default currency, in which all prices are stored.
 */
export const DEFAULT_CURRENCY = CURRENCIES.at(0)!;

export const CURRENCY_COOKIE_NAME = 'preferred_currency'