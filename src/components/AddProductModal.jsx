import React from 'react'
import Modal from './ui/Modal'
import { useDispatch } from 'react-redux'
import { addProduct } from '../product/productSlice'

export default function AddProductModal() {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = React.useState(false)
  const [nama, setNama] = React.useState('')
  const [harga, setHarga] = React.useState('')
  const [stok, setStok] = React.useState('')

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

    const date = new Date()

    const product = {
      id: crypto.randomUUID(),
      nama: nama,
      harga: parseInt(harga),
      stok: parseInt(stok),
      createdDate: date.toLocaleDateString('en-GB'),
    }

    dispatch(addProduct(product))
    setNama('')
    setHarga('')
    setStok('')
    setIsOpen(false)
  }

  return (
    <Modal
      open={isOpen}
      setOpen={setIsOpen}
      title="Add Product"
      dialogTrigger={
        <button className="bg-blue-600 text-white rounded py-1 px-4 w-fit">
          Add Product
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
            Add
          </button>
        </div>
      </div>
    </Modal>
  )
}
