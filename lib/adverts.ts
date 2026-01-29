// lib/adverts.ts
import type { Advert } from './types'
import mockData from './mockData/adverts.json'


/**
 * Retrieve a list of adverts with pagination.
 * @returns 
 */
export function getAdverts(): Advert[] {
    return mockData;
}

/**
 * Retrieve a single advert by ID.
 * @param id 
 * @returns 
 */
export async function getAdvertById(
  id: number
): Promise<Advert | null> {
  const adverts = await getAdverts()
  return adverts.find(a => a.id === id) ?? null
}
