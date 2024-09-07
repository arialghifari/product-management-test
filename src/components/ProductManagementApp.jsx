import AddProductModal from './AddProductModal'
import ProductList from './ProductList'

export default function ProductManagementApp() {
  return (
    <>
      <div className="space-y-4 mb-4">
        <div className="flex justify-end">
          <AddProductModal />
        </div>
      </div>

      <ProductList />
    </>
  )
}
