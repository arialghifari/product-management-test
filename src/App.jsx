import React from 'react'
import ProductManagementApp from './components/ProductManagementApp'
import PokemonApp from './components/PokemonApp'

export default function App() {
  const [currentApp, setCurrentApp] = React.useState('PRODUCT MENAGEMENT')

  return (
    <div className="flex flex-col items-center justify-between bg-gray-100">
      <div className="flex flex-col relative p-4 md:p-10 w-full md:w-[600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 mb-5 gap-1 sm:gap-2">
          <button
            className={`text-lg font-semibold text-center rounded border p-2 ${
              currentApp === 'PRODUCT MENAGEMENT'
                ? 'bg-blue-200 border-none'
                : 'border-gray-300'
            }`}
            onClick={() => setCurrentApp('PRODUCT MENAGEMENT')}
          >
            PRODUCT MANAGEMENT
          </button>
          <button
            className={`text-lg font-semibold text-center rounded border p-2 ${
              currentApp === 'POKEMON'
                ? 'bg-blue-200 border-none'
                : 'border-gray-300'
            }`}
            onClick={() => setCurrentApp('POKEMON')}
          >
            POKEMON
          </button>
        </div>

        {currentApp === 'PRODUCT MENAGEMENT' && (
          <ProductManagementApp setCurrentApp={setCurrentApp} />
        )}
        {currentApp === 'POKEMON' && (
          <PokemonApp setCurrentApp={setCurrentApp} />
        )}
      </div>
    </div>
  )
}

