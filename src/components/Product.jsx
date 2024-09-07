import DeleteProductDialog from './DeleteProductDialog'
import EditProductModal from './EditProductModal'

export default function Product({ item }) {
  function formatAngka(angka) {
    return new Intl.NumberFormat('ID').format(angka)
  }

  return (
    <div className="bg-white rounded p-2 flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
      <div className="w-full">
        <div className="flex justify-between flex-wrap gap-2">
          <p className="font-medium">{item.nama}</p>
          <p>IDR. {formatAngka(item.harga)}</p>
        </div>

        <p className="font-light">Stock: {formatAngka(item.stok)}</p>
      </div>

      <div className="flex flex-nowrap gap-1">
        <EditProductModal item={item} />
        <DeleteProductDialog item={item} />
      </div>
    </div>
  )
}
