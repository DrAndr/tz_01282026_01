import { AdvertsSection } from '@/components/advert/adverts-section'

export default async function Adverts() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="main-section space-y-6">

        <header className="flex items-center justify-between w-full py-5 px-4 mb-10 mt-5 border shadow-accent shadow-2xl">
          <h1 className="text-2xl font-bold">Недвижимость Пхукета</h1>
        </header>

        <AdvertsSection />

      </main>
    </div>
  )
}