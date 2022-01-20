import './Css/ItemCard.css';
import { useContext } from "react";
import { PhotoContext } from "../Context/PhotoContext";


export function ItemCard( { item } ) {
	
	const { changePhoto } = useContext( PhotoContext );
	
	return (<li onClick={ () => {
			changePhoto( { item } );
		} }>
			<img className='preview' src={ item.url } alt={ item.title } />
			<div className='description'>
				<h4>{ item.title }</h4>
				
				<h5>{ item.date }</h5>
			</div>
		</li>);
	
}