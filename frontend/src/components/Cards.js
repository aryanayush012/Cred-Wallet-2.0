import React, { useContext, useEffect, useRef, useState } from "react";
import cardContext from "../context/cards/cardContext";
import Carditem from "./CardItem";
import AddCard from "./AddCard";
import { useNavigate } from "react-router-dom";
import Cards1 from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const Cards = (props) => {
  const context = useContext(cardContext);
  const navigate = useNavigate();
  const { cards, getCards, editCard } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getCards();
    } else {
      navigate("/login");
    }
    //eslint - disable - next - line;
  }, []);
  const ref = useRef(null);
  const refClose = useRef(null);
  const [card, setCard] = useState({
    id: "",
    eBankName: "",
    eCardNumber: "",
    eCardHolderName: "",
    eExpiryDate: "",
    cvc: "",
    focus: "",
  });

  const updateCard = (currentCard) => {
    ref.current.click();
    setCard({
      id: currentCard._id,
      eBankName: currentCard.BankName,
      eCardNumber: currentCard.CardNumber,
      eCardHolderName: currentCard.CardHolderName,
      eExpiryDate: currentCard.ExpiryDate,
      cvc: currentCard.cvc,
    });
  };

  const handleClick = (e) => {
    console.log("Updating the card...", card);
    editCard(
      card.id,
      card.eBankName,
      card.eCardNumber,
      card.eCardHolderName,
      card.eExpiryDate,
      card.cvc
    );
    refClose.current.click();
    props.handleAlert("Cards Updated Successfully", "success");
  };

  const onChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };
  const handleInputFocus = (evt) => {
    setCard({ ...card, focus: evt.target.name });
  };

  return (
    <>
      <AddCard handleAlert={props.handleAlert} />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ backgroundColor: "#3D3D3D" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Card Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Cards1
                cvc={card.cvc}
                expiry={card.eExpiryDate}
                name={card.eCardHolderName}
                number={card.eCardNumber}
                focused={card.focus}
              />
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="BankName" className="form-label">
                    Bank Name
                  </label>
                  <select
                    name="eBankName"
                    className="form-control"
                    required
                    id="eBankName"
                    onChange={onChange}
                    value={card.eBankName}
                  >
                    <option value="">--Select --</option>
                    <option value="ALLAHABAD BANK">ALLAHABAD BANK </option>
                    <option value="ANDHRA BANK">ANDHRA BANK</option>
                    <option value="AXIS BANK">AXIS BANK</option>
                    <option value="STATE BANK OF INDIA">
                      STATE BANK OF INDIA
                    </option>
                    <option value="BANK OF BARODA">BANK OF BARODA</option>
                    <option value="UCO BANK">UCO BANK</option>
                    <option value="UNION BANK OF INDIA">
                      UNION BANK OF INDIA
                    </option>
                    <option value="BANK OF INDIA">BANK OF INDIA</option>
                    <option value="BANDHAN BANK LIMITED">
                      BANDHAN BANK LIMITED
                    </option>
                    <option value="CANARA BANK">CANARA BANK</option>
                    <option value="GRAMIN VIKASH BANK">
                      GRAMIN VIKASH BANK
                    </option>
                    <option value="CORPORATION BANK">CORPORATION BANK</option>
                    <option value="INDIAN BANK">INDIAN BANK</option>
                    <option value="INDIAN OVERSEAS BANK">
                      INDIAN OVERSEAS BANK
                    </option>
                    <option value="ORIENTAL BANK OF COMMERCE">
                      ORIENTAL BANK OF COMMERCE
                    </option>
                    <option value="PUNJAB AND SIND BANK">
                      PUNJAB AND SIND BANK
                    </option>
                    <option value="PUNJAB NATIONAL BANK">
                      PUNJAB NATIONAL BANK
                    </option>
                    <option value="RESERVE BANK OF INDIA">
                      RESERVE BANK OF INDIA
                    </option>
                    <option value="SOUTH INDIAN BANK">SOUTH INDIAN BANK</option>
                    <option value="UNITED BANK OF INDIA">
                      UNITED BANK OF INDIA
                    </option>
                    <option value="CENTRAL BANK OF INDIA">
                      CENTRAL BANK OF INDIA
                    </option>
                    <option value="VIJAYA BANK">VIJAYA BANK</option>
                    <option value="DENA BANK">DENA BANK</option>
                    <option value="BHARATIYA MAHILA BANK LIMITED">
                      BHARATIYA MAHILA BANK LIMITED
                    </option>
                    <option value="FEDERAL BANK LTD">FEDERAL BANK LTD </option>
                    <option value="HDFC BANK LTD">HDFC BANK LTD</option>
                    <option value="ICICI BANK LTD">ICICI BANK LTD</option>
                    <option value="IDBI BANK LTD">IDBI BANK LTD</option>
                    <option value="PAYTM BANK">PAYTM BANK</option>
                    <option value="FINO PAYMENT BANK">FINO PAYMENT BANK</option>
                    <option value="INDUSIND BANK LTD">INDUSIND BANK LTD</option>
                    <option value="KARNATAKA BANK LTD">
                      KARNATAKA BANK LTD
                    </option>
                    <option value="KOTAK MAHINDRA BANK">
                      KOTAK MAHINDRA BANK
                    </option>
                    <option value="YES BANK LTD">YES BANK LTD</option>
                    <option value="SYNDICATE BANK">SYNDICATE BANK</option>
                    <option value="SBM Bank India">SBM Bank India</option>
                    <option value="BANK OF MAHARASHTRA">
                      BANK OF MAHARASHTRA
                    </option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="CardNumber" className="form-label">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="eCardNumber"
                    name="eCardNumber"
                    value={card.eCardNumber}
                    onChange={onChange}
                    onFocus={handleInputFocus}
                    minLength={12}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="CardHolderName" className="form-label">
                    CardHolderName
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="eCardHolderName"
                    name="eCardHolderName"
                    value={card.eCardHolderName}
                    onFocus={handleInputFocus}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="ExpiryDate" className="form-label">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="eExpiryDate"
                    name="eExpiryDate"
                    value={card.eExpiryDate}
                    onFocus={handleInputFocus}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="cvc" className="form-label">
                    cvc
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cvc"
                    name="cvc"
                    value={card.cvc}
                    onChange={onChange}
                    onFocus={handleInputFocus}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                Update Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2 style={{ marginTop: "10%" }} className="text-center">
          Your Cards
        </h2>
        {cards.length === 0 && "No Cards to display"}
        {cards.map((card) => {
          return (
            <Carditem
              key={card._id}
              updateCard={updateCard}
              handleAlert={props.handleAlert}
              card={card}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cards;
