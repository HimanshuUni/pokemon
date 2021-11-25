import './footer.css'

export const Footer = ({ loadPokemon, loading }) => {


        return (
             
            <div className='footer'>
                <button className="btn" onClick = {loadPokemon}> {loading ?  'Loading...' : 'Load Pokemon'}</button>
            </div>
           
        )
   
    
}