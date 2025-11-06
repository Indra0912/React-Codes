import seriesData from "../api/seriesData.json";
const Naruto = () =>{

  return(
    <ul>
    {seriesData.map((curElem) =>{
        return(
   <li key={curElem.id} style={{ marginBottom: "20px" }}>
    <div> 
    <img src ={curElem.img_url} 
    width ="40%" height ="40%"/> 
    </div>
<h1>Name: {curElem.name}</h1>
<p>Description: {curElem.description}</p>
<h2>Rating: {curElem.rating} </h2>
<p>Genre: {curElem.genre}</p>
<p>Cast: {curElem.cast}</p>

<a href={curElem.watch_url} 
target="_blank">
<button>Watch Now</button>
</a>
</li>
)
})}
</ul>
);
};

export default Naruto;