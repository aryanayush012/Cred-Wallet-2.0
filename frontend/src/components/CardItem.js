import React, { useContext } from "react";
import cardContext from "../context/cards/cardContext";
import creditcardutils from "creditcardutils";
import Image from "./Image";
import Bank from "./Bank";

const Carditem = (props) => {
  const context = useContext(cardContext);
  const { deleteCard } = context;
  const { card, updateCard } = props;
  return (
    <div className="col-md-4">
      <div className="d-flex justify-content-center container text-white mt-5">
        <div className="card p-2 px-3 py-3">
          <div className="d-flex justify-content-between align-items-center">
            {/* <span className="mr-2">{card.BankName}</span> */}
            <Bank type={card.BankName} />

            <Image type={creditcardutils.parseCardType(card.CardNumber)} />
          </div>

          <div className="mt-3">
            <img
              style={{ width: "10%", height: "100%" }}
              src="https://cdn-icons-png.flaticon.com/128/9405/9405895.png"
            />
            <span className="mr-2 mx-3 text-right">
              {creditcardutils.formatCardNumber(card.CardNumber)}
            </span>
          </div>
          <div className="d-flex justify-content-between card-details mt-3 mb-3">
            <div className="d-flex flex-column">
              <span className="light">Card Holder</span>
              <span>{card.CardHolderName}</span>
            </div>
            <div className="d-flex flex-row">
              <div className="d-flex flex-column mr-3">
                <span className="light">Expired</span>
                <span>{card.ExpiryDate}</span>
              </div>
              <div className="d-flex flex-column mx-2">
                <span className="light">CVV</span>
                <span>{card.cvc}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <i
          className="far fa-trash-alt mx-3 my-3"
          onClick={() => {
            deleteCard(card._id);
            props.handleAlert("Deleted Successfully", "success");
          }}
        ></i>
        <i
          className="far fa-edit mx-3 my-3"
          onClick={() => {
            updateCard(card);
          }}
        ></i>
      </div>
    </div>
  );
};

export default Carditem;