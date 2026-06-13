import styles from "./ButtonContainer.module.css";


const ButtonsContainer = ({ onButtonClick }) => {

    const buttons = ['7', '8', '9', '/', 'C',
                     '4', '5', '6', '*', 
                     '1', '2', '3', '-', 
                     '0', '.', '=', '+'];


    return (
        <div className={styles.buttonContainer}>
            {buttons.map((buttons)=>(
                <button className={styles.button} onClick={()=> onButtonClick(buttons)}>{buttons}</button>
            ))}
      </div>

    );

};

export default ButtonsContainer;