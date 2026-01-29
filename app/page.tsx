import { AdvertsSection } from '@/components/advert/adverts-section'
import { CurrencySelect } from '@/components/header/currency-select'

export default async function Adverts() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100">
      <main className="main-section space-y-6 max-w-4/6">

        <header className="flex items-center justify-between w-full py-5 px-4 mb-10 mt-5 border shadow-accent shadow-2xl bg-white">
          <h1 className="text-2xl font-bold">Недвижимость Пхукета</h1>
          <CurrencySelect />
        </header>

        <AdvertsSection />

        <footer className='border shadow-accent mt-5 h-25 bg-white shadow-2xl'>
          
        </footer>

      </main>
    </div>
  )
}