import React, { useState, useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../../axios/api'

import './productList.scss'
import Product from '../products/product'

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

/*  useEffect(() => {
        if(search) {
            searchItems();
        }
    }, [search, searchItems]); */
    
/*     let itemsList = <Spinner />; */

let breadcumbs = null;

/* if(!isLoading) {
        itemsList = <NotFound origin="search" />;

        if(categories && categories.length) {
            breadcumbs = <Breadcumbs categories={categories} />
        }

        if(items.length) {
            itemsList = (<div
                className={classes.ItemList}>
                    <ul>
                        {items.map(i => <li key={i.id}><Item item={i} /></li>)}
                    </ul>
                </div>);
        }
  } */

    return (
        <div id="productList">
          <Product/>
          <Product/>
          <Product/>
          <Product/>

          
        </div>
    )
}

export default withRouter(ProductList);