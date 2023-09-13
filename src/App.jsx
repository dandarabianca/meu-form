import './App.css';
import Menu from './Assets/Components/Menu';
import Formulario from './Assets/Components/Formulario';
import UseForm from './Assets/Components/UseForm';
import ReviewForm from './Assets/Components/ReviewForm';
import Thenks from './Assets/Components/Thenks';
import "./index.css"

// Hooks
import { useForm } from './hooks/useform';

 export default function App() {

 const formComponents = [
  <UseForm />,
  <ReviewForm />,
  <Thenks /> 
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
    />
    </div>
  );
}
