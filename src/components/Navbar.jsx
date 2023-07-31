import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div style={{backgroundColor: "lightblue", display:"flex",flexDirection: "column", alignItems:"center"}}>
            <Link to={'/'}><img src='./images/home-dark-img.png' alt='navImg' style={{width:'70px'}} /></Link>
            </div>
       
     );
}
 
export default Navbar;
