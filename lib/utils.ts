import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Currency } from "./types"
import { CURRENCIES, DEFAULT_CURRENCY } from "./constants"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCurrencyValue(cookieValue?: string): Currency {
  if (cookieValue && CURRENCIES.includes(cookieValue as Currency)) {
    return cookieValue as Currency
  }
  return DEFAULT_CURRENCY
}


/**
 * Static currency rates
 */
export const rates: Record<Currency, number> = {
  'THB': 1,
  'USD': 0.0286,
  'EUR': 0.0263,
  'RUB': 2.57
}

/**
 * Convert the THB price to the specified currency.
 * @param price 
 * @param currency 
 * @returns 
 */
export function convertPrice(
  price: number,
  currency: Currency
) {
  return currency === DEFAULT_CURRENCY ? price : Math.round(price * rates[currency]);
}
