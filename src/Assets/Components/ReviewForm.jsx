import React from "react";
import "./ReviewForm.css";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

export default function ReviewForm( {data} ) {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio" value="unsatisfied" name="review" required />
          <BsFillEmojiFrownFill />
          <span>Insatisfeito</span>
        </label>
        <label className="radio-container">
          <input type="radio" value="satisfied" name="review" required />
          <BsFillEmojiSmileFill />
          <span>Satisfeito</span>
        </label>
        <label className="radio-container">
          <input type="radio" value="excelllent" name="review" required />
          <BsFillEmojiHeartEyesFill />
          <span>Excelente</span>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="Estamos curiosos sobre sua experiencia com o produto..."
        ></textarea>
      </div>
    </div>
  );
}
