import { UserContext } from "../../context/UserContext/UserState"
import "./Cart.scss"
import "../Products/Hamster.scss"

import { useContext, useEffect } from 'react'

const Cart = () => {
const {token, user, getUserInfo} = useContext(UserContext)

useEffect(() => {
  getUserInfo();
}, [token]);

  if (!user){
  return (
      <div className="what">
      <div className='"hamsterContainer'>
          <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
              <div className="wheel"></div>
                  <div className="hamster">
                      <div className="hamster__body">
                          <div className="hamster__head">
                              <div className="hamster__ear"></div>
                              <div className="hamster__eye"></div>
                              <div className="hamster__nose"></div>
                          </div>
                          <div className="hamster__limb hamster__limb--fr"></div>
                          <div className="hamster__limb hamster__limb--fl"></div>
                          <div className="hamster__limb hamster__limb--br"></div>
                          <div className="hamster__limb hamster__limb--bl"></div>
                          <div className="hamster__tail"></div>
                      </div>
                  </div>
              <div className="spoke"></div>
          </div>
      </div>
      <h1>Cargando...</h1>
      </div>
)
}
console.log(user.Orders);
const orders = user.Orders
console.log(orders[0].Products);
  return (
    <div className="container">
            <div className="content">
                <div>
                    <div className="panel panel-info panel-shadow">
                        <div className="panel-heading">
                            <h3>
                                <img className="img-circle img-thumbnail" src="https://bootdey.com/img/Content/user_3.jpg" alt="User" />
                                Matew darfkmoun
                            </h3>
                        </div>
                        <div className="panel-body">

                           
                            <div className="product">
                                <div className="product-image">
                                    <img src="https://www.bootdey.com/image/400x200/FFB6C1/000000" className="img-cart" alt="Product 1" />
                                </div>
                                <div className="product-info">
                                    <strong>Product 1</strong>
                                </div>
                                <div className="product-qty">
                                    <form className="form-inline">
                                        <input className="form-control" type="text" defaultValue="1" />
                                        <button rel="tooltip" className="btn btn-default"><i className="fa fa-pencil"></i></button>
                                        <a href="#" className="btn btn-primary"><i className="fa fa-trash-o"></i></a>
                                    </form>
                                </div>
                                <div className="product-price">
                                    $54.00
                                </div>
                                <div className="product-total">
                                    $54.00
                                </div>
                            </div>
                            
                            <div className="summary">
                                <div className="summary-row">
                                    <div className="summary-label">Total Product</div>
                                    <div className="summary-value">$86.00</div>
                                </div>
                                <div className="summary-row">
                                    <div className="summary-label">Total Shipping</div>
                                    <div className="summary-value">$2.00</div>
                                </div>
                                <div className="summary-row">
                                    <div className="summary-label"><strong>Total</strong></div>
                                    <div className="summary-value"><strong>$88.00</strong></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="btn btn-success"><span className="glyphicon glyphicon-arrow-left"></span>&nbsp;Continue Shopping</a>
                    <a href="#" className="btn btn-primary pull-right">Next<span className="glyphicon glyphicon-chevron-right"></span></a>
                </div>
            </div>
        </div>

  )
}

export default Cart