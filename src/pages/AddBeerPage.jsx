import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddBeerPage() {
const navigate = useNavigate()

const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [first_brewed, setFirstBrewed] = useState('');
    const [brewers_tips, setBrewersTips] = useState('');
    const [attenuation_level, setAttenuationLevel] = useState(0);
    const [contributed_by, setContributedBy] = useState('');

const handleSubmit = async event =>{
    event.preventDefault()
   const body = {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by}
    
   try{
await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body)
   setName('')
   setTagline('')
   setDescription('')
   setFirstBrewed('')
   setBrewersTips('')
   setAttenuationLevel(0)
   setContributedBy('')
   navigate('/beers')
}
    catch(error){
        console.error(error)
    }
}
const formStyle = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  const labelStyle = {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
  };

  const inputStyle = {
    padding: "5px",
    borderRadius: "3px",
    border: "1px solid #ccc",
  };

  const textAreaStyle = {
    padding: "5px",
    borderRadius: "3px",
    border: "1px solid #ccc",
    resize: "vertical",
  };

  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "5px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  };


    return(
        < >
        <h1 style={{display:"flex", flexDirection:"column", alignItems:"center"}}>New Beer</h1>
        <form onSubmit={handleSubmit} style={formStyle}>
            <label style={labelStyle}>
                Name:
                <input style={inputStyle} value={name} name="name" type='text' onChange={event => setName(event.target.value)}  ></input>
            </label>
            <label style={labelStyle}>
                Tagline:
                <input  style={inputStyle} value={tagline} name="tagline" type='text' onChange={event => setTagline(event.target.value)}  ></input>
            </label>
            <label style={labelStyle}>
                Description:
                <textarea style={textAreaStyle} value={description} name="description" type='text'  onChange={event => setDescription(event.target.value)} ></textarea>
            </label >
            <label style={labelStyle}>
                First Brewed:
                <input style={inputStyle} value={first_brewed} name="first_brewed" type='text'  onChange={event => setFirstBrewed(event.target.value)}  ></input>
            </label>
            <label style={labelStyle}>
                Brewers Tips:
                <input style={inputStyle} value={brewers_tips} name="brewers_tips"  type='text'  onChange={event => setBrewersTips(event.target.value)}  ></input>
            </label>
            <label style={labelStyle}>
                Attenuation Level:
                <input style={inputStyle} value={attenuation_level} name="attenuation_level" type='number'  onChange={event => setAttenuationLevel(event.target.value)}  ></input>
            </label>
            <label style={labelStyle}>
                Contributed By:
                <input style={inputStyle} value={contributed_by} name="contributed_by" type='text'  onChange={event => setContributedBy(event.target.value)}  ></input>
            </label>
            <button style={buttonStyle} type='submit'>Crete New Beer</button>
        </form>
        </>
    )
}

export default AddBeerPage;
