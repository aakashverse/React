function Card(props){
    return (
        <div className="card">
            <img src={props.image} width="200px" height="200px" />
            <div style={{textAlign:"center",color:"white"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>Shop Now</h2>
                <h2>Price: {props.Price}</h2>
            </div>
        </div>
    )
}
export default Card;
