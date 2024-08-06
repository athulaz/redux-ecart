import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { removeFromWishList } from '../redux/slices/wishSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'


function Wish() {

  const [wishData, setWishListData] = useState([])

  const dispatch = useDispatch()
  const { wishlist } = useSelector((state) => state.wishSlice)

  useEffect(() => {
    setWishListData(JSON.parse(localStorage.getItem('wishlist')))
  }, [wishlist])


  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    dispatch(removeFromWishList(product.id))
  }


  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          {
            wishData.length > 0 ?
              wishData.map(item => (
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  <div className="col mb-5 " >
                    <div className="card h-100 shadow" >
                      <Link to={'/view/1'}>
                        <img className="card-img-top" src={item.thumbnail} alt="..." height={'200px'} />
                      </Link>

                      <div className="card-body p-4">
                        <div className="text-center">
                          <h5 className="fw-bolder">{item.title}</h5>
                          ${item.price}
                        </div>
                      </div>
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className='d-flex justify-content-between'>
                          <button className='btn' onClick={() => dispatch(removeFromWishList(item.id))}><i className="fa-solid fa-trash fa-xl" style={{ color: "#ff0000", }} /></button>
                          <button className='btn' onClick={() => handleAddToCart(item)}><i className="fa-solid fa-cart-shopping fa-xl" style={{ color: "#0008e6", }} /></button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              ))
              :
              <h2 className='text-dark'>No Wishlist Items</h2>

          }

        </div>
      </section>
    </>
  )
}

export default Wish