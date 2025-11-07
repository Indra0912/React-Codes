import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

const Naruto = () =>{
  return(
    <ul>
    {seriesData.map((curElem) =>{
        return(
        <SeriesCard key={curElem.id} curElem={curElem}/>
       ) })}
</ul>
);
};

export default Naruto;