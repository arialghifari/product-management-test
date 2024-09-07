import SORT_OPTIONS from '../const/SORT_OPTIONS'
import Dropdown from './ui/Dropdown'

export default function SortDropdown({ currentSort, setCurrentSort }) {
  return (
    <Dropdown
      popoverTrigger={
        <button className="flex gap-1.5 mb-3">
          <span>Sort by</span>
          <span className="font-semibold flex">
            {currentSort} <img src="/chevron-down.svg" alt="" />
          </span>
        </button>
      }
    >
      <>
        {SORT_OPTIONS.map((option) => (
          <div key={option} className="flex w-full gap-1">
            <input
              type="radio"
              name="filter"
              onChange={() => setCurrentSort(option)}
              id={option}
              defaultChecked={option === currentSort}
            />
            <label htmlFor={option} className="flex-1">
              {option}
            </label>
          </div>
        ))}
      </>
    </Dropdown>
  )
}
