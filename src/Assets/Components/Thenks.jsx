import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";
import React from "react";
import "./Thenks.css";

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill/>,
  satisfied: <BsFillEmojiSmileFill/>,
  excelllent: <BsFillEmojiHeartEyesFill/>,
}

export default function Thenks( {data} ) {
  return (
    <div className="thenks-container">
      <h2>Estamos quase...</h2>
      <span>
        A sua opinião é muito impotante para nós, na sua proxima compra você
        receberá um cupom de 10%.
      </span>
      <span>Clicando no botão abaixo você ira concluir sua avaliação.</span>
      <h3>Veja seu resumo de avaliação {data.name}:</h3>
      <h4 className="review-data">
        <span>Satisfação do produto:</span>
        {emojiData[data.review]}
      </h4>
      <h4 className="review-data">
        <span>Seu comentário:</span>
        {data.comment}
      </h4>
    </div>
  );
}
