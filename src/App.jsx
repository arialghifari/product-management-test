import React from 'react'
import ProductManagementApp from './components/ProductManagementApp'
import PokemonApp from './components/PokemonApp'

export default function App() {
  const [currentApp, setCurrentApp] = React.useState('POKEMON')

  return (
    <div className="flex flex-col items-center justify-between bg-gray-100">
      <div className="flex flex-col relative p-4 md:p-10 w-full md:w-[600px]">
        <div className="grid grid-cols-2 mb-5 gap-2">
          <button
            className={`text-xl font-semibold text-center rounded border p-2 ${
              currentApp === 'PRODUCT MENAGEMENT'
                ? 'bg-blue-100 border-none'
                : ''
            }`}
            onClick={() => setCurrentApp('PRODUCT MENAGEMENT')}
          >
            Product Management
          </button>
          <button
            className={`text-xl font-semibold text-center rounded border p-2 ${
              currentApp === 'POKEMON' ? 'bg-blue-100 border-none' : ''
            }`}
            onClick={() => setCurrentApp('POKEMON')}
          >
            Pokemon
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

