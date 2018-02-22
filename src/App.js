import React, { Component } from 'react';
import PanierBoard from './components/PanierBoard';
import Books from './components/Books';
import Showbook from './components/Showbook';

import './App.css';



class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      books:[
                 {id:0,nom:"L'Art de perdre",prix:1200,src:"img/img0.jpg",longueur:511,commander:false,},
                 {id:1,nom:"L'Ordre du jour",prix:1450,src:"img/img1.jpg",longueur:151,commander:false},
                 {id:2,nom:"Arrête avec tes mensonges",prix:950,src:"img/img2.jpg",longueur:100,commander:false},
                 {id:3,nom:"La tresse",prix:1050,src:"img/img3.jpg",longueur:224,commander:false},
                 {id:4,nom:"Bakhita",prix:1100,src:"img/img4.jpg",longueur:176,commander:false},
                 {id:5,nom:"Tiens ferme ta couronne",prix:850,src:"img/img5.jpg",longueur:352,commander:false},
                 {id:6,nom:'La Daronne',prix:900,src:"img/img6.jpg",longueur:324,commander:false},
                 {id:7,nom:"L'Avancée de la nuit",prix:850,src:"img/img7.jpg",longueur:285,commander:false},
                 {id:8,nom:"La Serpe",prix:700,src:"img/img8.jpg",longueur:518,commander:false},
               ],
     panier:[],
     prixTotale:0,
     displaypanier:false,
     searchterm:'',
     showbook:false,
     book:{},
    }
    this.addBookToPanier = this.addBookToPanier.bind(this);
    this.removeBookFromPanier = this.removeBookFromPanier.bind(this);
    this.displayPanier = this.displayPanier.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showBook = this.showBook.bind(this);
    this.hideBook = this.hideBook.bind(this);
  }
  displayPanier(){
       this.setState({displaypanier:!this.state.displaypanier})
  }
  addBookToPanier(id){
    const book =this.state.books[id];
    book.commander = true;
    const panier = this.state.panier;

    panier.push(book);
    this.setState({
      panier:panier,
      prixTotale:this.state.prixTotale + book.prix,
    })
  }
  removeBookFromPanier(id){
    const book =this.state.books[id];
    book.commander = false;
    const panier = this.state.panier;

    const panierFiltred = panier.filter(p => p.id!==id);
    this.setState({
      panier:panierFiltred,
      prixTotale:this.state.prixTotale - book.prix,
    })
  }

  handleChange(event){
    this.setState({
      searchterm:event.target.value,

    })
  }
  showBook(id){
    this.setState({showbook:true,
    book:this.state.books[id]});

  }
  hideBook(){
    this.setState({showbook:false})
  }
  render() {
    const {books,panier,prixTotale,displaypanier,searchterm,showbook}=this.state;
    return (
      <div className="App">
        <PanierBoard prix={prixTotale} panier={panier}
        handledisplaypanier={this.displayPanier}
          />

        {!showbook?
          !displaypanier?
            <Books listBooks ={books}
            addBookToPanier={this.addBookToPanier}
            removeBookFromPanier={this.removeBookFromPanier}
            searchterm ={searchterm} onchange={this.handleChange}
            onclickImg={this.showBook}
            />
            :<Books listBooks ={panier}
            addBookToPanier={this.addBookToPanier}
            removeBookFromPanier={this.removeBookFromPanier}
            searchterm ={searchterm} onchange={this.handleChange}
            onclickImg={this.showBook}
            />
         :
         <Showbook book={this.state.book} backonclick={this.hideBook}/>
       }
      </div>
    );
  }
}

export default App;
