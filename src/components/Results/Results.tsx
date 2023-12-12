import './ResultsStyles.scss'
import ResultItem from '../ResultItem/ResultItem'
import { useContext, useState } from 'react'
import OrderBy from '../OrderBy/OrderBy'
import { RecordsContext } from '../../context/Records'
import cn from 'classnames'

function Results() {
  const { filteredRecords } = useContext(RecordsContext)

  const itemsPerPage = 5

  const [currentPage, setCurrentPage] = useState(1)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const currentRecords = filteredRecords.slice(startIndex, endIndex)

  const totalPages = Math.ceil(filteredRecords.length / itemsPerPage)

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
  }

  const generatePageNumbers = () => {
    const pageNumbers = []
    const maxVisiblePages = 6

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <span
            key={i}
            onClick={() => handlePageChange(i)}
            className={cn('base', { active: i === currentPage })}
          >
            {i}
          </span>
        )
      }
    } else {
      const visiblePages = Math.min(maxVisiblePages, totalPages - 1)
      const halfVisible = Math.floor(visiblePages / 2)

      // first three pages + dots
      for (let i = 1; i <= halfVisible; i++) {
        pageNumbers.push(
          <span
            key={i}
            onClick={() => handlePageChange(i)}
            className={cn('base', { active: i === currentPage })}
          >
            {i}
          </span>
        )
      }
      if (currentPage <= 3) pageNumbers.push(<span key="dots1">...</span>)

      // if the current page is just after the third item
      if (currentPage === 4) {
        pageNumbers.push(
          <span
            key={currentPage}
            onClick={() => handlePageChange(currentPage)}
            className={cn('base', { active: currentPage === currentPage })}
          >
            {currentPage}
          </span>
        )
        pageNumbers.push(<span key="dots2">...</span>)
      }

      // if the  current page is in between the last 3 and first 3 pages and not 4th and total pages - 3th
      if (currentPage > 4 && currentPage < totalPages - 3) {
        pageNumbers.push(<span key="dots3">...</span>)
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(
            <span
              key={i}
              onClick={() => handlePageChange(i)}
              className={cn('base', { active: i === currentPage })}
            >
              {i}
            </span>
          )
        }
        pageNumbers.push(<span key="dots4">...</span>)
      }

      if (currentPage >= totalPages - 3)
        pageNumbers.push(<span key="dots5">...</span>)
      // if the current page is just before last the third item
      if (currentPage === totalPages - 3) {
        pageNumbers.push(
          <span
            key={currentPage}
            onClick={() => handlePageChange(currentPage)}
            className={cn('base', { active: currentPage === currentPage })}
          >
            {currentPage}
          </span>
        )
      }

      // last three pages
      for (let i = totalPages - 2; i <= totalPages; i++) {
        pageNumbers.push(
          <span
            key={i}
            onClick={() => handlePageChange(i)}
            className={i === currentPage ? 'active' : ''}
          >
            {i}
          </span>
        )
      }
    }

    return pageNumbers
  }
  return (
    <div className="results-container">
      <div className="results-orderby-container">
        <div className="results">
          {currentRecords.map((record, index) => (
            <ResultItem
              record={record}
              key={record.id}
              index={index}
              length={filteredRecords.length}
            />
          ))}
        </div>
        <OrderBy />
      </div>
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        {generatePageNumbers()}
        <button
          disabled={endIndex >= filteredRecords.length}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Results
