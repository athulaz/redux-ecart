import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, decreaseQuantity } from '../redux/slices/cartSlice'
import { emptyCart } from '../redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'


function Cart() {

  const dispatch = useDispatch()
  const { cartlist } = useSelector((state) => state.cartSlice)

  const navigate = useNavigate()

  const handleCheckout = () => {
    dispatch(emptyCart())
    navigate('/')
  }


  return (
    <>
      <div className="row p-5">
        <div className="col-md-9 col-sm-12">
          <h3>Cart Summary</h3>
          {
            cartlist?.length > 0 ?

              <table className='table table-bordered border border-dark shadow'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Product Image</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>


                  {
                    cartlist.map((item, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>
                          <img src={item.thumbnail} alt="" />
                        </td>
                        <td>{item.quantity * item.price}</td>
                        <td>
                          <button className='btn' onClick={() => dispatch(addToCart(item))}>+</button>
                          <input type="text" name="" className='form-control' value={item.quantity} readOnly id="" />
                          <button className='btn' onClick={() => dispatch(decreaseQuantity(item))}>-</button>
                        </td>
                        <td>
                          <button className='btn' onClick={() => dispatch(removeFromCart(item.id))}>
                            <i className="fa-solid fa-trash fa-xl" style={{ color: "#fe0134", }} />
                          </button>
                        </td>
                      </tr>
                    ))
                  }

                </tbody>
              </table>
              :
              <h2>No Items Are Added!!</h2>
          }


        </div>

        <div className="col-md-3 col-sm-12 mt-5">
          <div className='border w-100 shadow border-dark p-3'>
            <h3>Total Products : <span className='text-info'>{cartlist.length}</span></h3>
            <h3>Total Price : <span className='text-success'>{Math.ceil(cartlist.reduce((prev, item) => prev + (item.quantity * item.price), 0))}</span></h3>
            <div className='d-grid'>
              <button className='btn btn-success' onClick={handleCheckout}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart