import React, { useState } from 'react';
import RsModal from '../Modal/Modal';

import Roundcart from '../Round-cart/Roundcart';
import './Cart.css';

const Cart = (props) => {
    const {cart, setCart} = props;

    const removeTotal = () => {

        setCart([])
    }
    
    const [modalIsOpen, setIsOpen] = useState(false);

    const  khaboNa=()=>{
        setIsOpen(true);
    }

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <div>
                {
                    cart.map(sn => <Roundcart key={sn.id} sn={sn}></Roundcart>)
                }
            </div>
            <div>
                <button onClick={khaboNa} >Choose one for me</button>
                <button onClick={removeTotal}>Choose Again</button>

            </div>
            <RsModal cart={cart} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}></RsModal>
            
        </div>
    );
};

export default Cart;