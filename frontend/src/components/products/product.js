import React from 'react';
import './product.scss';
import { ReactComponent as Ship } from '../../img/ship.svg'
import { Link } from 'react-router-dom';

const Product = (props) => {
     const getPrice = () => {
        let price = '';
        if(props.item.price.currency === 'ARS') {
            price = '$ ';
        } else if (props.item.price.currency === 'USD') {
            price = 'U$D ';
        }
            price += props.item.price.amount
        return price;
    } 
 

   const link = `/items/${props.item.id}`;  

    return (
        <div id="product">
            <Link to={link}>    
                <img src={props.item.picture} alt="Item"/>  
            </Link>  
           <div> 
 
                    <h1> {getPrice()}
                        {props.item.free_shipping ? ( <div><Ship/></div> ) : null}
                    </h1>
       
                <Link to={link}> 
                   <h2> {props.item.title}</h2>
                </Link> 
  

           </div>
           <div>
               <p>{props.item.condition}</p>
           </div>

        </div>
    )
};

export default Product;