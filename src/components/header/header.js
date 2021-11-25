import { Link } from 'react-router-dom'
import './header.css'

export const Header = ({ handleChange,handleSelect,name,search }) => {
  
    const list =  name.length ? name.map((name) => <option value={name} key ={name}/> ) : ''

    return (
            <nav>
                <Link to="/" style={{textDecoration:'none', color:"white"}}> <p>List of Pokemons</p></Link>
                <div className='nav-right'>
                <div>
                    <input type='search' list='option' placeholder='Search Pokemon' onChange={handleChange} />
                    {
                        search ? <datalist id='option'>{list}</datalist> : ''
                    }
                </div>
                <div>
                    <select name="select" id="select" defaultValue="" onChange={handleSelect}>
                        <option value="" disabled  style={{display: 'none'}}>Filter</option>
                        <option value="All">All</option>
                        <option value="recentView">Recent Views</option>
                    </select>
                </div>
                </div>
            </nav>
            
       )
}