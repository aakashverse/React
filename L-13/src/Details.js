import { Outlet,Link } from "react-router"

export default function Details(){
    return(
        <>
        <nav className="nav">
            {/* <Link to="/Details" className="btn">Details</Link> */}
            <Link to="Hello" className="btn">Hello</Link>
            <Link to="Hi" className="btn">Hi</Link>
        </nav>
        <h1 className="content">Welcome to Details Page</h1>
        <Outlet></Outlet>
        </>
    )
}