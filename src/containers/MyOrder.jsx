import React, {useContext} from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '../contex/AppContext';
import '@styles/MyOrder.scss';
import flechita from "@icons/flechita.svg";

const MyOrder = () => {
	const {state} = useContext(AppContext);
	const totalSum = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{
					state.cart.map( (product,index) => {
						const idProduct = `orderItem${product.id}-item${index}`;

						return <OrderItem 
							indexProduct={index}
							product={product} 
							key={idProduct}
						/>
					})
				}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${totalSum()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
