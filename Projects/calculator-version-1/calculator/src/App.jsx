import styles from "./App.module.css";
import Display from "./component/Display";
import ButtonsContainer from "./component/ButtonContainer";


function App() {
  

  return (
    <>
    <div className={styles.calculatorContainer}>
      <Display />
      <ButtonsContainer />
    
    </div>
      
    </>
  )
}

export default App
