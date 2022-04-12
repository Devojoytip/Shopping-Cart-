import React from "react";

// class Navbar extends React.Component{

//     render(){

//         return(
//             <div style={styles.nav}>
//             <div style={styles.cartIconContainer}>
//                <img 
//                style={styles.cartIcon}
//                src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
//                alt="cart-icon"

//                /> 
//                <span style={styles.cartCount}>3</span> 
//             </div>
//         </div>
//         )

//     }
// }

const Navbar = (props) => {

    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img
                    style={styles.cartIcon}
                    src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
                    alt="cart-icon"

                />
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    )


}

//styling done using objects
const styles = {
    cartIcon: {
        height: 32, // js automatically adds px
        marginRight: 20
    },

    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    cartIconContainer: {
        position: 'relative'
    },

    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }
};

export default Navbar;