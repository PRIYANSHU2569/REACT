import styles from "./App.module.css";
import Display from "./component/Display";
import ButtonsContainer from "./component/ButtonContainer";
import { useState } from "react";


function App() {
  const [calVal , setCalVal] = useState("");

  const onButtonClick = (buttonText)=>{
    if(buttonText === 'C'){
      setCalVal("");

    }else if(buttonText === '='){
      const result = eval(calVal);
      setCalVal(result);

    }else{
      const newCalVal = calVal + buttonText;
      setCalVal(newCalVal);
    }
     
  };

  return (
    <>
    <div className={styles.calculatorContainer}>
      <Display calVal={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    
    </div>
      
    </>
  );
}

export default App
