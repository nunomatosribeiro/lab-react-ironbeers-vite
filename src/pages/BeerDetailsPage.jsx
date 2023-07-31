import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios'

function BeerDetailsPage() {

const [beers, setBeers] = useState(null)
const { beerId } = useParams();

const beerDetailsData = async() =>{
        try{
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        setBeers(response.data)
        console.log(response.data)
        }
        catch(error){
            console.error('Error fetching', error)
        }
    }

useEffect(() =>{
    
    beerDetailsData()
}, [beerId])

    return beers ? (
        <div style={{ margin:'10px'}}>


<img src={beers.image_url} alt='beerImg' style={{width: '100px'}} />
<h1>{beers.name}</h1>
<p>{beers.tagline}</p>
<p>{beers.first_brewed}</p>
<p>{beers.attenuation_level}</p>
<p>{beers.description}</p>
<p>{beers.contributed_by}</p>

</div>
) : 
    'Loading...'

}

export default BeerDetailsPage;
