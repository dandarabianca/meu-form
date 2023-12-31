import React from "react";
import "./ReviewForm.css";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

export default function ReviewForm( {data, updateFieldHandler} ) {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input 
          type="radio" 
          value="unsatisfied" 
          name="review" 
          required 
          checked={data.review === "unsatisfied"}
          onChange={(e) => updateFieldHandler("review", e.target.value)} 
          />
          <BsFillEmojiFrownFill />
          <span>Insatisfeito</span>
        </label>
        <label className="radio-container">
          <input 
          type="radio" 
          value="satisfied" 
          name="review" 
          required 
          checked={data.review === "satisfied"}
          onChange={(e) => updateFieldHandler("review", e.target.value)}/>
          <BsFillEmojiSmileFill />
          <span>Satisfeito</span>
        </label>
        <label className="radio-container">
          <input 
          type="radio" 
          value="excelllent" 
          name="review" 
          required
          checked={data.review === "excelllent"}
          onChange={(e) => updateFieldHandler("review", e.target.value)} />
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
          required
          value={data.comment || ""}
          onChange={(e) => updateFieldHandler("comment", e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}
