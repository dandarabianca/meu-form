import './App.css';
import Menu from './Assets/Components/Menu';
import Formulario from './Assets/Components/Formulario';
import UseForm from './Assets/Components/UseForm';
import ReviewForm from './Assets/Components/ReviewForm';
import Thenks from './Assets/Components/Thenks';
import "./index.css"

// Hooks
import { useForm } from './hooks/useform';

function App() {

 const formComponents = [
  <UseForm />,
  <ReviewForm />,
  <Thenks /> 
 ];

 const { currentStep, currentComponents} = useForm(formComponents);

  return (
    <div className="App">
    <Menu />
    <Formulario/>
    </div>
  );
}

export default App;
