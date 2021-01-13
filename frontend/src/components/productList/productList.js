import React, { useState, useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../../axios/api'

import './productList.scss'
import Product from '../products/product'
import Loading from '../loading/loading'
import Breadcumb from '../breadcrumb/breadcrumb'
import NotFound from '../notFound/notFound'


const ProductList = (props) => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState([]);

    const query = new URLSearchParams(props.location.search);
    const search = query.get('search'); 

        const searchItems = useCallback(() => {
        setIsLoading(true);
        axios.get(`/api/items?q=${search}`)
                .then(res => {
                    setIsLoading(false);
                    setItems(res.data.items);
                    setCategories(res.data.categories);
                })
                .catch(err => {
                    setIsLoading(false);
                    setItems(null);
                    setCategories(null);
                });
    }, [search]); 

  useEffect(() => {
        if(search) {
            searchItems();
        }
    }, [search, searchItems]); 
    
   let productList = <Loading />; 

let breadcumbs = null;

 if(!isLoading) {
        productList =
            <NotFound/>;

        if(categories && categories.length) {
            breadcumbs = <Breadcumb categories={categories} />
        }

        if(items.length) {
            productList = (<div
              >
                    <ul>
                        {items.map(i => <li key={i.id}><Product item={i} /></li>)}
                    </ul>
                </div>);
        }
  } 

    return (
        <div id="productList">
             { breadcumbs }
            { productList }
          
        </div>
    )
}

export default withRouter(ProductList);