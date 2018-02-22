import React from 'react';
import bookinfo from '../bookinfo';
const Showbook = ({book,backonclick})=>
  <div>
    <br/>
    <button onClick={()=>backonclick()} className="material-button"> Retour </button>
    <h1>{book.nom} </h1>
    <div className="presentation">
      <img src={book.src} alt=""/>
      <div>
        <h3>Auteur : {bookinfo[book.id].auteur}</h3>
        <p>{bookinfo[book.id].info}</p>
        <h5>Longueur : {book.longueur} pages.</h5>
      </div>
    </div>

  </div>

  export default Showbook;
