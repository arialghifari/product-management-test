import AddProductModal from './components/AddProductModal'
import ProductList from './components/ProductList'

export default function App() {
  return (
    <div className="flex flex-col items-center justify-between h-screen bg-gray-100">
      <div className="flex flex-col relative p-4 md:p-10 w-full md:w-[600px]">
        <h1 className="text-2xl font-semibold text-center mb-5">
          Product Management
        </h1>

        <div className="space-y-4 mb-4">
          <div className="flex justify-end">
            <AddProductModal />
          </div>
        </div>

        <ProductList />
      </div>
    </div>
  )
}

