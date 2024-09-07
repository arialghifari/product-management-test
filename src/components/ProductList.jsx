/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from 'react-redux'
import Product from './Product'
import React from 'react'
import SORT_OPTIONS from '../const/SORT_OPTIONS'
import SortDropdown from './SortDropdown'

export default function ProductList() {
  const products = useSelector((state) => state.products)
  const [filteredProducts, setFilteredProducts] = React.useState(products)
  const [searchQuery, setSearchQuery] = React.useState('')
  const [sortQuery, setSortQuery] = React.useState(SORT_OPTIONS[0])

  React.useEffect(() => {
    setSearchQuery('')
    setSortQuery(SORT_OPTIONS[0])
    setFilteredProducts(products)
  }, [products])

  React.useEffect(() => {
    if (!searchQuery || searchQuery === '') {
      setFilteredProducts(products)
      return
    }

    setFilteredProducts(
      products.filter((product) =>
        product.nama.toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
    setSortQuery(SORT_OPTIONS[0])
  }, [searchQuery])

  React.useEffect(() => {
    let sortedProducts = [...products]

    if (sortQuery === SORT_OPTIONS[0]) {
      sortedProducts.sort(
        (a, b) =>
          new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime()
      )
    } else if (sortQuery === SORT_OPTIONS[1]) {
      sortedProducts.sort(
        (b, a) =>
          new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime()
      )
    } else if (sortQuery === SORT_OPTIONS[2]) {
      sortedProducts.sort((a, b) =>
        a.nama.toLowerCase().localeCompare(b.nama.toLowerCase())
      )
    } else if (sortQuery === SORT_OPTIONS[3]) {
      sortedProducts.sort((b, a) =>
        a.nama.toLowerCase().localeCompare(b.nama.toLowerCase())
      )
    } else if (sortQuery === SORT_OPTIONS[4]) {
      sortedProducts.sort((a, b) => a.harga - b.harga)
    } else if (sortQuery === SORT_OPTIONS[5]) {
      sortedProducts.sort((b, a) => a.harga - b.harga)
    } else if (sortQuery === SORT_OPTIONS[6]) {
      sortedProducts.sort((a, b) => a.stok - b.stok)
    } else if (sortQuery === SORT_OPTIONS[7]) {
      sortedProducts.sort((b, a) => a.stok - b.stok)
    }

    setFilteredProducts(sortedProducts)
  }, [sortQuery])

  return (
    <div>
      <input
        type="text"
        placeholder="⌕ search.."
        className="w-full p-2 border rounded border-gray-300 mb-4"
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <SortDropdown currentSort={sortQuery} setCurrentSort={setSortQuery} />

      <div className="space-y-3 sm:space-y-5">
        {(products.length === 0 || filteredProducts.length === 0) && (
          <div className="mt-5">
            <img src="/empty.svg" alt="empty" className="w-1/3 mx-auto" />
            <p className="text-center text-gray-600 mt-1">No products found</p>
          </div>
        )}

        {filteredProducts?.map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </div>
    </div>
  )
}
