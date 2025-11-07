export const SeriesCard = (props) =>{
    return(
     <li style={{ marginBottom: "20px" }}>
    <div> 
    <img src ={props.curElem.img_url} 
    width ="40%" height ="40%"/> 
    </div>props<h1>Name: {props.curElem.name}</h1>
<p>Description: {props.curElem.description}</p>
<h2>Rating: {props.curElem.rating} </h2>
<p>Genre: {props.curElem.genre}</p>
<p>Cast: {props.curElem.cast}</p>

<a href={props.curElem.watch_url} 
target="_blank">
<button>Watch Now</button>
</a>
</li>
)
}