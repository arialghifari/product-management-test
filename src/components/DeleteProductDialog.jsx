import { useDispatch } from 'react-redux'
import Dialog from './ui/Dialog'
import { deleteProduct } from '../product/productSlice'

export default function DeleteProductDialog({ item }) {
  const dispatch = useDispatch()

  return (
    <Dialog
      title={`Delete "${item.nama}"?`}
      dialogTrigger={
        <button className="bg-gray-100 p-2 rounded hover:bg-red-300 flex flex-1 justify-center items-center">
          <img src="/trash.svg" alt="delete" className="size-4 sm:size-6" />
        </button>
      }
      dialogAction={
        <button
          onClick={() => dispatch(deleteProduct(item.id))}
          className="bg-red-600 rounded px-2 py-1 text-white"
        >
          Delete
        </button>
      }
    ></Dialog>
  )
}
