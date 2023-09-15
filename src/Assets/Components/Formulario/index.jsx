import React from "react";
import "./styles.css";
import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import {FiSend} from "react-icons/fi";
import Steps from "../Steps";

export default function Formulario ({
  changeStep,  
  currentStep,
  currentComponents,
  isLastStep,
  isFirstStep,
}) {
    return(
    <div className="form-container">
        <Steps currentStep={currentStep}/>

      <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
        <div className="inputs-container">
          {currentComponents}</div>
          <div className="action">
            {!isFirstStep && (
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious/>
              <span>Voltar</span>
            </button>)}
           {!isLastStep ? ( 
           <button type="submit">
              <span>Avançar</span>
              <GrFormNext/>
            </button>
            ) : ( 
            <button type="button">
              <span>Enviar</span>
              <FiSend/>
            </button>)}
            </div>
        </form>
    </div>
    );
}