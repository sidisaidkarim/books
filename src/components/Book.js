import React from 'react';


const Book = ({name,price,imgsrc,addBookToPanier,
  removeBookFromPanier,isAdd,onclickImg})=>
<div className="book "
  style={ isAdd ? {'color':'#2FDE87'}:{'color':'black'}}>
 <span> {name} </span>
 <img src={imgsrc} alt="" className="book-image"
            onClick={onclickImg} /><br/>
 Prix:
 {price} DA <br/>
 {!isAdd?
  <button onClick={addBookToPanier} className="material-button">ajouter</button>
  :<button onClick={removeBookFromPanier} className="material-button"
    style={{'background':'#2FDE87','color':'black'}}> Anuller</button>
 }
</div>

export default Book;
