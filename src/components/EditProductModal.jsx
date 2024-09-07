import React from 'react'
import Modal from './ui/Modal'
import { useDispatch } from 'react-redux'
import { updateProduct } from '../product/productSlice'

export default function EditProductModal({ item }) {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = React.useState(false)
  const [nama, setNama] = React.useState(item.nama)
  const [harga, setHarga] = React.useState(item.harga)
  const [stok, setStok] = React.useState(item.stok)

  const [error, setError] = React.useState({
    nama: '',
    harga: '',
    stok: '',
  })

  function handleSubmit() {
    if (!nama) {
      setError({ ...error, nama: 'Nama product is required' })
      return
    }

    if (!harga) {
      setError({ ...error, harga: 'Harga is required' })
      return
    }

    if (!stok) {
      setError({ ...error, stok: 'Stok is required' })
      return
    }

    const product = {
      id: item.id,
      nama: nama,
      harga: parseInt(harga),
      stok: parseInt(stok),
      createdDate: item.createdDate,
    }

    dispatch(updateProduct(product))
    setIsOpen(false)
  }

  return (
    <Modal
      open={isOpen}
      setOpen={setIsOpen}
      title="Edit Product"
      dialogTrigger={
        <button className="bg-gray-100 p-2 rounded hover:bg-blue-300 flex flex-1 justify-center items-center">
          <img src="/edit.svg" alt="edit" className="size-4 sm:size-6" />
        </button>
      }
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="nama" className="text-sm">
            Nama *
          </label>
          <input
            onChange={(e) => {
              setNama(e.target.value)
              setError({ ...error, nama: '' })
            }}
            value={nama}
            type="text"
            id="nama"
            placeholder="nama produk"
            className="w-full border border-gray-300 px-2 py-1 rounded"
          />
          {error?.nama && (
            <p className="text-red-500 text-sm mt-1">{error.nama}</p>
          )}
        </div>

        <div>
          <label htmlFor="harga" className="text-sm">
            Harga *
          </label>
          <input
            onChange={(e) => {
              setHarga(e.target.value)
              setError({ ...error, harga: '' })
            }}
            value={harga}
            type="number"
            id="harga"
            placeholder="harga produk"
            className="w-full border border-gray-300 px-2 py-1 rounded"
          />
          {error?.harga && (
            <p className="text-red-500 text-sm mt-1">{error.harga}</p>
          )}
        </div>

        <div>
          <label htmlFor="stok" className="text-sm">
            Stok *
          </label>
          <input
            onChange={(e) => {
              setStok(e.target.value)
              setError({ ...error, stok: '' })
            }}
            value={stok}
            type="number"
            id="stok"
            placeholder="stok produk"
            className="w-full border border-gray-300 px-2 py-1 rounded"
          />
          {error?.stok && (
            <p className="text-red-500 text-sm mt-1">{error.stok}</p>
          )}
        </div>

        <div>
          <button
            onClick={handleSubmit}
            className="bg-blue-700 rounded text-white w-full p-2 mt-3"
          >
            Update
          </button>
        </div>
      </div>
    </Modal>
  )
}
