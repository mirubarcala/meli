import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header';
import ProductList from './components/productList/productList'
import ProductDescription from './components/product/product'
const App = () => {
  return (
     <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path="/items" component={ProductList} />
            <Route exact path="/items/:id" component={ProductDescription} />
          </Switch>
        </BrowserRouter>

  );
}

export default App;
