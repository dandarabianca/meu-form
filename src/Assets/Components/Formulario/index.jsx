import React from "react";
import "./styles.css"
import {GrFormNext, GrFormPrevious} from "react-icons/gr";

export default function Formulario ({
    currentComponents,
}) {
    return(
    <div className="form-canteiner">
        <span> etapas</span>
      <form>
        <div className=" inputs-container">
          {currentComponents}
        </div>
        </form>
    </div>
    )
}