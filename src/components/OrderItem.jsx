import React, { useContext } from 'react';
import AppContext from '../contex/AppContext';
import '@styles/OrderItem.scss';
import iconClose from "@icons/icon_close.png";

const OrderItem = ({product,indexProduct}) => {
	const defaultImg = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
	const {removeFromCart} = useContext(AppContext);
	
	const handleRemove = (product,indexProduct) => {
		removeFromCart(product,indexProduct);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0] || defaultImg} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
			<img src={iconClose} alt="close" onClick={() => handleRemove(product,indexProduct)}/>
		</div>
	);
}

export default OrderItem;