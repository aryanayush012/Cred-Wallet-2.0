import React, { useContext, useEffect, useRef, useState } from "react";
import cardContext from "../context/cards/cardContext";
import Carditem from "./CardItem";
import AddCard from "./AddCard";
import { useNavigate } from "react-router-dom";
import Cards1 from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import "./styles/Cards.style.css";

const Cards = (props) => {
  const context = useContext(cardContext);
  const navigate = useNavigate();
  const { cards, getCards, editCard } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getCards();
    } else {
      navigate("/");
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
      <h1 className="card-text">
      {cards.length === 0 ? "No Cards to display": "Your Cards"}
      </h1>
      <div className="all-card-container">
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
