import { getAdverts } from '@/lib/adverts';
import { Suspense } from 'react'
import { AdvertCard } from './advert-card';

export async function AdvertsSection() {
  const adverts = getAdverts() 
  return (
    <Suspense fallback={<div>Загрузка объявлений...</div>}>
        <div className="grid grid-cols-3 gap-6">
            {adverts.map(advert => (
                <AdvertCard key={advert.id} advert={advert} />
            ))}
        </div>
    </Suspense>
    // TODO Pagination
  )
}
