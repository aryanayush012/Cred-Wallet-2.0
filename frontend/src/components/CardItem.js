import React, { useContext } from "react";
import cardContext from "../context/cards/cardContext";
import creditcardutils from "creditcardutils";
import Image from "./Image";
import Bank from "./Bank";
import "./styles/CardItem.style.css";

const Carditem = (props) => {
  const context = useContext(cardContext);
  const { deleteCard } = context;
  const { card, updateCard } = props;
  return (
    <div className="card-item-container">
      <div className="card-item">
          <div className="card-item-bank">
            <Image type={creditcardutils.parseCardType(card.CardNumber)} />
            <Bank type={card.BankName} />
            <span>{card.BankName}</span>
          </div>
          <div className="card-item-chip"> 
          </div>
          <div className="card-item-details">
            <span className="card-item-number">
              {creditcardutils.formatCardNumber(card.CardNumber)}
            </span>
              <span className="card-item-holder">{card.CardHolderName}</span>
            
                <span className="card-item-expiry">{card.ExpiryDate}</span>
                <span className="card-item-cvc">{card.cvc}</span>
          </div>
      </div>
      <div className="card-item-actions">
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