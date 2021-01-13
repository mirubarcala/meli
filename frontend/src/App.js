import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './index.scss'
import Header from './components/header/header';
import ProductList from './components/productList/productList'
import ProductDetail from './components/productDetail/productDetail'
const App = () => {
  return (
     <BrowserRouter id="main">
            <Header/>
            <Switch>
              <Route exact path="/items" component={ProductList} />
              <Route exact path="/items/:id" component={ProductDetail} />
            </Switch>
        </BrowserRouter>

  );
}

export default App;
