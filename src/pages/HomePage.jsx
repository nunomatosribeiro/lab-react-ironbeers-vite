import { Link } from "react-router-dom";

function HomePage() {

    return(
        <div style={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
        <h1>Welcome</h1>
        
        <Link to='/beers'><img src='./images/bottles.webp' alt='beersImg' style={{width:"600px"}} /></Link>
        <h1 style={{fontSize:'50px'}}>Check all the beers</h1>
        <Link to='/random-beer'><img src='./images/friendstoast.jpg' alt='beersImg' style={{width:"600px"}} /></Link>
        <h1 style={{fontSize:'50px'}}>Check random beers</h1>
        <Link to='/new-beer'><img src='./images/irish-beers.webp' alt='beersImg' style={{width:"600px"}} /></Link>
        <h1 style={{fontSize:'50px'}}>Check new beers</h1>
        
        </div>
    )

}

export default HomePage;
