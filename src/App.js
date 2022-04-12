import React from "react";
import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { collection, query, where } from "firebase/firestore";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        // {
        //   price: 999,
        //   title: 'Watch',
        //   qty: 1,
        //   img: 'https://n4.sdlcdn.com/imgs/i/z/i/HMTe-HM-9072-Metal-Analog-SDL494827480-1-db8fc.jpg',
        //   id: 1
        // },
        // {
        //   price: 999,
        //   title: 'Mobile Phone',
        //   qty: 10,
        //   img: 'https://m.media-amazon.com/images/I/71geVdy6-OS._SX569_.jpg',
        //   id: 2
        // },
        // {
        //   price: 999,
        //   title: 'Laptop',
        //   qty: 4,
        //   img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80',
        //   id: 3
        // }
      ],
      loading:true
    }

    this.db=firebase.firestore();
    // so we have not to call firebase.firestore() everytime when needed
  }

  componentDidMount(){
    // firebase
    // .firestore()
    // .collection('products')
    // .get()
    // .then((snapshot)=>{
    //   console.log(snapshot);

    //   //get returns a querySnapshot which is passed as arguement to then, which then returns Snapshot of db at that time

    //   //docs is an arr containing the documents of snapshot (individual product) so iterate over it & access all fields of the individual docs using doc.data() where doc is element of docs

    //   snapshot.docs.map((doc)=>{
    //     console.log(doc.data());
    //   })

    //   const products=snapshot.docs.map((doc)=>{
    //     const data=doc.data();
    //     data['id']=doc.id;

    //     return data;
    //   })

    //   this.setState({
    //     products,
    //     loading:false
    //   })
    // })

    this.db
    .collection('products')
    .onSnapshot((snapshot)=>{
      console.log(snapshot);

      //docs is arr containing the products so iterate over it & access data of its elements using doc.data() where doc is element of docs

      snapshot.docs.map((doc)=>{
        console.log(doc.data());
      })

      const products=snapshot.docs.map((doc)=>{
        const data=doc.data();
        data['id']=doc.id;

        return data;
      })

      this.setState({
        products,
        loading:false
      })
    })
  }

  // handleIncreaseQunantity = (product) => {
  //   console.log('increase qty of ', product);
    
  //   const { products } = this.state;
  //   const index = products.indexOf(product);

  //   products[index].qty += 1;

  //   this.setState({
  //     // products:products
  //     products
  //   })
  // }

  // updating qty in firebase due to which onSnapshot is triggered which then triggers setState and re-renders
  
  handleIncreaseQunantity = (product) => {
    console.log('increase qty of ', product);
    
    const { products } = this.state;
    const index = products.indexOf(product);

    const docRef=this.db.collection('products').doc(products[index].id);

    docRef
    .update({
      qty:products[index].qty + 1
    })
    .then(()=>{
      console.log('qty increased');
    })
    .catch((error)=>{
      // to catch any error
      console.log('This error occurred: ',error);
    })
  }

  handleDecreaseQunantity = (product) => {
    console.log('decrease qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;

    this.setState({
      // products:products
      products
    })
  }

  // handleDeleteProduct = (id) => {
  //   const { products } = this.state;

  //   // getting array of remaining items whose id doesn't match
  //   const items = products.filter((item) => item.id !== id);

  //   this.setState({
  //     products: items
  //   })
  // }

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const docRef=this.db.collection('products').doc(id);

    docRef
    .delete()
    .then(()=>{
      console.log('item deleted');
    })
    .catch((error)=>{
      console.log('This error occurred: ',error);
    })
}

  getCartCount=()=>{
    const {products}=this.state;

    let count=0;

    products.forEach((product)=>{
      count+=product.qty;
    })

    return count;
  }

  getCartTotal=()=>{
    const {products}=this.state;

    let CartTotal=0;

    products.map((product)=>{
      CartTotal+=product.qty*product.price;
    })

    return CartTotal;
  }

  addProduct=()=>{
    this.db
    .collection('products')
    .add({
      // passing obj ie product to be added
      img:'https://m.media-amazon.com/images/I/71JgqNxxuBL._SL1500_.jpg',
      price:900,
      qty:5,
      title:'Washing Machine'
    })
    .then((docRef)=>{
      // we get ref of this object - docRef

      console.log('Product added',docRef);

    })
    .catch((error)=>{
      // to catch any error
      console.log('This error occurred: ',error);
    })
  }

  sortProducts=()=>{
    const docRef=this.db.collection('products');
    const q=query(docRef,where('price','==','1800'));
  }

  render() {
    const {products,loading} =this.state;
    return (
      <div className="App">
        {/* <h1>Cart</h1> */}
        <Navbar count={this.getCartCount()} />

        <button style={{padding: 20, margin: 10, fontFamily: 'sans-serif', fontSize: 20}} onClick={this.addProduct}>Add a product</button>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQunantity}
          onDecreaseQuantity={this.handleDecreaseQunantity}
          onDeleteProduct={this.handleDeleteProduct}
        />

        {loading && <p1>Loading products</p1>}

        {/* {sortProducts()}; */}

        <div style={{fontSize: 20, padding: 10}} >TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
