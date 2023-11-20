import './Searcher.css'
import { useRef } from 'react'
import { MdSearch } from 'react-icons/md'

const Searcher = ({ setNoteName }) => {
    const handleChange = (event) => {
        setNoteName(event.target.value);
    }

    return (
        <div className='searcher'>
            <input type='text' className='searcher-text' placeholder='Busca una nota...' onChange={handleChange}></input>
            <MdSearch className='searcher-search' size='2em' />
        </div>
    );
}

export default Searcher;