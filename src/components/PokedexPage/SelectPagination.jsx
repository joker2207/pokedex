import { useRef } from "react"
import './styles/SelectPagination.css'
import { useDispatch } from "react-redux"
import { setLoadingModalG } from "../../store/states/loading.state"

const SelectPagination = ({ setPokemonsForPage, setCurrentPage }) => {


  const paginationRef = useRef()
  const dispatch = useDispatch()


  const handlePaginationChange = () => {
    dispatch(setLoadingModalG(true))
    setPokemonsForPage(Number(paginationRef.current.value))
    setCurrentPage(1)
    setTimeout(() => {
      dispatch(setLoadingModalG(false))
    }, 2000);
  }



  return (
    <div className="select__pagination__container">
      <select className="select__pagination" ref={paginationRef} onChange={handlePaginationChange}>
        <option key={'Pagination'} value="5" defaultValue>Pagination</option>
        <option key={4} value="4">4</option>
        <option key={12} value="8">8</option>
        <option key={16} value="16">16</option>
        <option key={32} value="32">32</option>
        <option key={64} value="64">64</option>
        <option key={108} value="108">108</option>
      </select>
    </div>
  )
}

export default SelectPagination