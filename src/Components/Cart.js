import React,{useState} from "react";
import { useSelector } from "react-redux";
import CartList from "./CartList";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const Totalcost = cart.reduce((total, item) => (total += item.total), 0);
  const amount = cart.reduce((amount, item) => (amount += item.amount), 0);

  const [num, setNum]=useState('')
  const handleChange=(e)=>{
    const limit=3
    setNum(e.target.value.slice(0,limit))
  }
  const [cardn, setCardn]=useState('')
  const handleCard=(e)=>{
    const limit=16
        setCardn(e.target.value.slice(0,limit))
    
  }

  return (
    <div>
      <h1 className="text-center item">Cart</h1>
      <div className="grid">
        <div className="cartrow">
          {cart.map((e) => {
            return (
              <div key={e.id}>
                <CartList
                  id={e.id}
                  name={e.name}
                  img={e.img}
                  title={e.title}
                  price={e.price}
                  amount={e.amount}
                  total={e.total}
                />
              </div>
            );
          })}
        </div>
        <div className="details border-top">
          <h4 className="py-3 mx-2 h4 text-danger summary">
            ORDER SUMMARY ( <span className="text-light">{amount} Items</span> )
          </h4>
          <h4 className="subtotal mx-3">
            Sub Total<span>$ {Totalcost}</span>
          </h4>
          <h4 className="discount mx-3">
            Discount <span>$ 0</span>
          </h4>
          <h4 className="delivery mx-3">
            Delivery Charges <span>Free</span>
          </h4>
          <h4 className=" mx-2 text-danger h4 total">
            TotalCost
            <small className=" h6 text-danger"> (Incl of all taxes.)</small>
            <span>$ {Totalcost}</span>
          </h4>
          <button
            type="button"
            className="btn btn-outline-warning w-100 place"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Place Your Order
          </button>
          
          {/* payment modal */}
          <div
            className="modal fade "
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5
                    className="modal-title text-dark h4"
                    id="staticBackdropLabel"
                  >
                    Payment details
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form className="row g-3 needs-validation" noValidate>
                    <div className="col-md-12">
                      <label htmlFor="validationCustom01" className="form-label">
                        Card Holder
                      </label>  
                      <input
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        required
                      />
                      <div className="valid-feedback">
                        Please provide Card Holders Name.
                      </div>
                    </div>

                    <div className="col-md-12">
                      <label htmlFor="validationCustom03" className="form-label">
                        Card Number
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="validationCustom03"
                        value={cardn}
                        onChange={handleCard}
                        required
                      />
                      <div className="invalid-feedback">
                        Please provide a valid Card No.
                      </div>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="validationCustom04" className="form-label">
                        Exp. Month
                      </label>
                      <select
                      defaultValue={'Choose...'}
                        className="form-select"
                        id="validationCustom04"
                        required
                      >
                        <option disabled value="Choose...">
                          Choose...
                        </option>
                        <option value="01">January</option>
                        <option value="02">February </option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                      <div className="invalid-feedback">Please select a Month.</div>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="validationCustom04" className="form-label">
                        Exp. Year
                      </label>
                      <select
                        defaultValue={'Choose...'}
                        className="form-select"
                        id="validationCustom04"
                        required
                      >
                        <option disabled value="Choose...">
                          Choose...
                        </option>
                        <option value="20"> 2020</option>
                        <option value="21"> 2021</option>
                        <option value="22"> 2022</option>
                        <option value="23"> 2023</option>
                        <option value="24"> 2024</option>
                        <option value="25"> 2025</option>
                      </select>
                      <div className="invalid-feedback">Please select a Year.</div>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="validationCustom05" className="form-label">
                        CVV
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="validationCustom05"
                        value={num}
                        onChange={handleChange}
                        required
                      />
                      <div className="invalid-feedback">
                        Please provide a valid CVV.
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label className="form-check-label" htmlFor="invalidCheck">
                          Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">
                          You must agree before submitting.
                        </div>
                      </div>
                    </div>
                    <h4 className=" text-dark h4">TotalCost
            <small className=" h6 text-dark"> (Incl of all taxes.)</small>
            <span className="mx-5">$ {Totalcost}</span>
          </h4>
                    <div className="col-12">
                      <button className="btn btn-success col-12" type="submit">
                        Payment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
