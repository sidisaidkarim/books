import React from 'react';
import Book from './Book';

function isSearched(searchTerm){
  return function(item){
    return item.nom.toLowerCase().includes(searchTerm.toLowerCase())
  }
}

const styles ={

  display: 'flex',
  justifyContent: 'space-around',
  width:'80%',
  flexWrap: 'wrap',
  marginLeft:'auto',
  marginRight:'auto',

}
const Books = ({listBooks,addBookToPanier,removeBookFromPanier,
  searchterm,onchange,onclickImg})=>
<div>
  <br/>
  <input type="text" onChange={onchange} placeholder="Search..."
  className="search-bar"/>
  <br/> <br/>
  <div style={styles}>

     {listBooks.filter(isSearched(searchterm)).map(b=> <Book key={b.id} name={b.nom}
                               price={b.prix} imgsrc={b.src}
                               addBookToPanier={ ()=>addBookToPanier(b.id)}
                               removeBookFromPanier={()=>removeBookFromPanier(b.id)}
                               isAdd={b.commander} onclickImg={()=>onclickImg(b.id)}
     />)}
  </div>
</div>

export default Books;
