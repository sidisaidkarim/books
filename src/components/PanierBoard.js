import React from 'react';

const PanierBoard = ({prix,panier,handledisplaypanier})=>
<div className="panier">
  <h4> Mon Panier   <input type="checkbox" onChange={handledisplaypanier} /></h4>
  prix totale : {prix} | Nombre d'items : {panier.length}<br/>

</div>

export default PanierBoard;
