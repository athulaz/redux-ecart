import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addToWishList } from '../redux/slices/wishSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'




function View() {

  const [pro, setPro] = useState({})
  const { id } = useParams()
  const product = JSON.parse(localStorage.getItem("products"))
  console.log(id);

  // const {  product } = useSelector((state) => state.productSlice)

  // const dispatch=useDispatch()

  // const {wishlist} = useSelector((state)=>state.wishSlice)


  useEffect(() => {
    setPro(product.find(item => item.id == id))
  }, [])

  console.log(pro);

  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          {
            pro ?
              <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6">
                  <img
                    className="card-img-top mb-5 mb-md-0"
                    src={pro.thumbnail}
                    alt="img"
                  />
                </div>
                <div className="col-md-6">
                  <div className="small mb-1">ID : {pro.id}</div>
                  <h1 className="display-5 fw-bolder">{pro.title}</h1>
                  <div className="fs-5 mb-5">
                    <span>$40.00</span>
                  </div>
                  <p className="lead">
                    {pro.description}
                  </p>
                  <div className="d-flex">
                    <input
                      className="form-control text-center me-3"
                      id="inputQuantity"
                      type="num"
                      defaultValue={1}
                      style={{ maxWidth: "3rem" }}
                    />
                    <button className="btn btn-outline-dark flex-shrink-0 text-light" type="button" >
                      <i className="bi-cart-fill me-1" />
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              </div>

              :
              <h4>Not Available!!</h4>
          }
        </div>
      </section>

    </>
  )
}

export default View