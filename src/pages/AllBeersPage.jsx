import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function AllBeersPage() {
    const [beers, setBeers] = useState([])

const fetchingData = async () => {
            try{
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
        const allBeers =  response.data
        setBeers(allBeers)
            console.log(response.data)
        }
        catch(error){
            console.error('Error fetching data', error)
        }
        }

    useEffect(() =>{
        fetchingData();
    }, [])

    const beerListItemStyle = {
        listStyleType: 'none',
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#f7f7f7',
        border: '1px solid #ddd',
        borderRadius: '5px',
        marginBottom: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      };

return(
    <div >
<h1>All the Beers</h1>
{
    beers.map(beer =>(
        <div style={beerListItemStyle} key={beer._id}>
            <img src={beer.image_url} alt='beerImg' style={{width: '70px'}} />
        <h1>{beer.name}</h1>
        <p>{beer.tagline}</p>
        <p>{beer.contributedBy}</p>
        <Link to={`/beers/${beer._id}`} >Check the details</Link>
        </div>
    ))
}
</div>
)

}

export default AllBeersPage;
