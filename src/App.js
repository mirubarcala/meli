import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './index.scss'
import Header from './components/header/header';
import ProductList from './components/productList/productList'
import ProductDescription from './components/products/product'
const App = () => {
  return (
     <BrowserRouter id="main">
          <Header/>
          <Switch>
            <Route exact path="/items" component={ProductList} />
            <Route exact path="/items/:id" component={ProductDescription} />
          </Switch>
        </BrowserRouter>

  );
}

export default App;
