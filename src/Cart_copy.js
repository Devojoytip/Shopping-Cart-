import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {

    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 999,
                    title: 'Watch',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 999,
                    title: 'Mobile Phone',
                    qty: 10,
                    img: '',
                    id: 2
                },
                {
                    price: 999,
                    title: 'Laptop',
                    qty: 4,
                    img: '',
                    id: 3
                }
            ]
        }

    }

    handleIncreaseQunantity=(product) =>{
        console.log('increase qty of ',product);
        const {products}=this.state;
        const index=products.indexOf(product);

        products[index].qty+=1;

        this.setState({
            // products:products
            products
        })
    }

    handleDecreaseQunantity=(product) =>{
        console.log('decrease qty of ',product);
        const {products}=this.state;
        const index=products.indexOf(product);

        if (products[index].qty===0) {
            return;
        }
        products[index].qty-=1;

        this.setState({
            // products:products
            products
        })
    }

    handleDeleteProduct=(id)=>{
        const {products}=this.state;
        
        // getting array of remaining items whose id doesn't match
        const items=products.filter((item)=> item.id !== id);

        this.setState({
            products:items
        })
    }
    render() {
        // const arr=[1,2,3,4,5];

        const { products } = this.state;
        return (
            <div className="cart">
                {/* {arr} */}

                {/* {
                    arr.map((item)=>{
                        return item+5
                    })
                }  */}

                {/* <CartItem qty={1} price={99} title={'Watch'} img={''} /> */}

                {
                    products.map((product) => {
                        return (
                            < CartItem 
                            // can pass any no of props
                            product = { product }
                            key = { product.id }
                            onIncreaseQuantity={this.handleIncreaseQunantity}
                            onDecreaseQuantity={this.handleDecreaseQunantity}
                            onDeleteProduct={this.handleDeleteProduct}

                            />
                        )
                        
                    })
                }
            </div>
        )
    }
}

export default Cart;