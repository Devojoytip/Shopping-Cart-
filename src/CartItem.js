import React from "react";

// class CartItem extends React.Component{

const CartItem = (props) => {
    // increaseQuantity(){
    //     console.log('this.state',this.state);
    //     console.log('this',this);
    // }

    // increaseQuantity = () => {
    //     console.log('this.state', this.state);
    //     console.log('this', this);

        //setState form 1 - passing it an obj
        // but mul calls don't work as react will execute only last call andd the obj passed into it

        // this.setState({
        //     qty:this.state.qty+1
        // },()=>{
        //     console.log(this.state);
        // })

        //setState form 2 - passing it an fn
        // and used when needed previous State
        // it puts all fn calls in a stack and call one by one

        // this.setState((prevState) =>{
        //     return {
        //         qty:prevState.qty+1
        //     }
        // });

        // with callback
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty + 1
    //         }
    //     }, () => {
    //         console.log(this.state);
    //     });
    //     // console.log(this.state);
    // }

    // decreaseQuantity = () => {

    //     const { qty } = this.state;
    //     if (qty == 0) {
    //         return;
    //     }
    //     this.setState((prevState) => {
    //         return {
    //             // qty:prevState.qty-1
    //             qty: this.state.qty - 1
    //         }
    //     })
    // }


    // console.log(this.props);
    // const {price,title,qty}=this.state;
    // const {price,title,qty}=this.props;

    const { price, title, qty } = props.product;
    // const { price, title, qty } = props;

    const {
        product,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteProduct
    } = props;

    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={product.img} />
            </div>
            <div className="right-block">

                {/* <div style={{fontSize:25}}>Phone</div>
                    <div style={{color:'#777'}}>Rs 999</div>
                    <div style={{color:'#777'}}>Qty: 1</div> */}

                {/* using state (which itself is an obj) */}

                {/* <div style={{fontSize:25}}>{this.state.title}</div> */}

                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: '#777' }}>Rs {price}</div>
                <div style={{ color: '#777' }}>Qty: {qty} </div>
                <div className="cart-item-actions">
                    <img
                        alt="increase"
                        className="action-icons"
                        src="https://cdn-icons.flaticon.com/png/512/2997/premium/2997933.png?token=exp=1645528834~hmac=53dddf6fd31bd4c991d40ffa1aa3b03d"
                        // onClick={this.increaseQuantity.bind(this)}

                        // onClick={this.props.onIncreaseQuantity(this.props.product)}
                        // onClick={this.increaseQuantity.bind(this)}

                        // onClick={()=>this.props.onIncreaseQuantity(this.props.product)}

                        onClick={() => onIncreaseQuantity(product)}
                    />
                    <img
                        alt="decrease"
                        className="action-icons"
                        src="https://cdn-icons.flaticon.com/png/512/2734/premium/2734848.png?token=exp=1645528792~hmac=fd85930b4dad08e61284e42c96bfae40"
                        // onClick={this.decreaseQuantity}

                        // onClick={()=>this.props.onDecreaseQuantity(this.props.product)}

                        onClick={() => onDecreaseQuantity(product)}

                    />
                    <img
                        alt="delete"
                        className="action-icons"
                        src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1645528875~hmac=b7a462867f307c1c56f5f9acef158c00"

                        onClick={() => onDeleteProduct(product.id)}
                    />
                </div>
            </div>
        </div>
    );

}

//styling done using objects
const styles = {
    image: {
        height: 110, // js automatically adds px
        width: 110,
        borderRadius: 4,
        backgroundColor: 'grey',
        
    }
}

export default CartItem;