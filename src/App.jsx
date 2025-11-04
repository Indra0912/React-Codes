// //import React from "react";

// export const App = () => {
//   return (
// <>
//   <CrunchRoll/>
//   <CrunchRoll/>
//   <CrunchRoll/>
//   <CrunchRoll/>
//   <CrunchRoll/>
// </>
//   )
// };


// const CrunchRoll = () => {
  
//   const name = "One Piece";
//   const summary = "Monkey D. Luffy and his pirate crew explore a fantastical world of endless oceans and exotic islands insearch of the world's ultimate treasure to become the next Pirate King.";
//   const  rating = "4.5";

//   const returnGenre = () =>{
//   const genre = "Zorojuro";
//     return genre;
//   }
  
//   return (
//        <div>
// <div>
//   <img src = "one-piece-season.jpg" width="40%" height= "40%"/>
// </div>
// <h2>Name: {name}</h2>
// <p>Summary:{summary}</p>
// <h3>Rating: {2+2.5}</h3>
// <p>Genre: {returnGenre()}</p>
//     </div>
//     )
//   };



export const App = () =>{
  return(
<>
<Naruto/>
<Naruto/>
<Naruto/>
<Naruto/>
<Naruto/>
</>
  );
};

const Naruto = () =>{
const name = "Naruto";
const description = "Shadow Clone Jutsu";
const rating = "4.8";
let age = 18;

const showCont = () =>{
  if (age >=18) return "Avaliable";
  return "Not Avaliable";
}

const returnGenre = () =>{
  const genre = "Hokage";
return genre;
}
  return(
    <div>
    <div> <img src = "one-piece-season.jpg" width ="40%" height ="40%"/> </div>
<h1>Name: {name}</h1>
<p>Description: {description}</p>
<h2>Rating: {rating} </h2>
<p>Genre: {returnGenre()}</p>
<button>{showCont()}</button>
    </div>
  );
};