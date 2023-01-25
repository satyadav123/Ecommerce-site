import {Link} from 'react-router-dom'
export const Navbar=(()=>{
    return (
        <>
        
        <div style={{width:"100%",border:"1px solid red",display:"flex",justifyContent:"space-around",height:"60px"}}>
       <Link to="/">Home</Link>
            <Link to="/about/:id">About</Link>
            <Link to="/product">Product</Link>
            <div>Your card: {0}</div>

        </div>
        
        </>
    )
})