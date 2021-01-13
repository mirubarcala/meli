import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Breadcrumb from '../breadcrumb/breadcrumb';
import NotFound from '../notFound/notFound'
import Loading from '../loading/loading';
import axios from '../../axios/api'
import './productDetail.scss';




const ProductDetail = (props) => {

    const [item, setItem] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { id } = props.match.params;

    useEffect(() => {
        setIsLoading(true);
        axios.get(`/api/items/${id}`)
                .then(res => {
                    setItem(res.data.item);
                    setCategories(res.data.item.categories);
                    setIsLoading(false);
                })
                .catch(err => {
                    setItem(null);
                    setCategories(null);
                    setIsLoading(false);
                });
    }, [id]);
console.log(item)
    const getPrice = (p) => {
        let price = '';
        if(p.currency === 'ARS') {
            price = '$ ';
        } else if (p.currency === 'USD') {
            price = 'U$D ';
        }
        price += p.amount;
        return price;
    }

    let productDetail = <Loading />;
    let breadcrumb = null;

    if(!isLoading) {
        productDetail = <NotFound origin="item" />;

        if(categories && categories.length) {
            breadcrumb = <Breadcrumb categories={categories} />
        }

        if(item) {
            productDetail = (
              <div className="detail">
                  <div>
                      <img src={item.picture} alt="Image"/>
                      <div>
                          <p>{item.condition + " "} -  {" " + item.sold_quantity} vendidos</p>
                          <h1>{item.title}</h1>
                          <h2>{getPrice(item.price)}</h2>
                          <button>Comprar</button>
                      </div>
                  </div>
                  <div>
                      <h1>Descripción del producto</h1>
                      <p>{item.description}</p>
                  </div>
              </div>
            );
        }
    }

    return (
        <div id="productDetail">
            { breadcrumb }
            { productDetail }
        </div>
    )
}

export default withRouter(ProductDetail);