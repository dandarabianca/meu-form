import './App.css';
import Menu from './Assets/Components/Menu';
import Formulario from './Assets/Components/Formulario';
import UseForm from './Assets/Components/UseForm';
import ReviewForm from './Assets/Components/ReviewForm';
import Thenks from './Assets/Components/Thenks';
import "./index.css"
import Steps from "./Assets/Components/Steps";

// Hooks
import { useForm } from './hooks/useform';
import { useState } from 'react';

const formTemplate = {
  name:"",
  email:"",
  review:"",
  comment:"",

}

 export default function App() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler =(key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value};
    });
  };

 const formComponents = [
  <UseForm data={data} updateFieldHandler={updateFieldHandler} />,
  <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
  <Thenks data={data} /> 
 ];

 const { currentStep, currentComponents, changeStep, isLastStep, isFirstStep} = useForm(formComponents);

  return (
    <div className="app">
    <Menu />
    <Formulario
    changeStep={changeStep}
    currentStep={currentStep}
    currentComponents={currentComponents}
    isLastStep={isLastStep}
    isFirstStep={isFirstStep}
    Steps={Steps}
    />
    </div>
  );
}
