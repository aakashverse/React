function Header(){
    return (
        <div className="heading">
            <img className="img" src="https://cdn.freelogovectors.net/wp-content/uploads/2021/02/myntra-logo-freelogovectors.net_.png" width="100px" height="100px"/>
            <div className="option">
                <button className="but">Men</button>
                <button className="but">Women</button>
                <button className="but">Kids</button>
                <button className="but">Home & Living</button>
                <button className="but">Beauty</button>
                <button className="but">Studio</button>
            </div>

            <input className="searchbar" placeholder="Search for Products brands & more"></input>

            <div className="profile">
                <button className="btn">Profile</button>
                <button className="btn">Wishlist</button>
                <button className="btn">Bag</button>
            </div>
        </div>    
    )
}
export default Header;