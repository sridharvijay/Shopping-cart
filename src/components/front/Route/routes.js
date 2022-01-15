import React from "react";
import { Route, Switch} from "react-router-dom";
import Products from "../Product/product";
import Cart from "../Cart/cart";
const Router = ({productItems}) => {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Products productItems={productItems}/>
                </Route>
                <Route path="/cart" exact>
                    <Cart/>
                </Route>
            </Switch>

        </div>
    )
}
export default Router;