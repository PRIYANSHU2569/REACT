import styles from "./ButtonContainer.module.css";


const ButtonsContainer = () => {

    const buttons = ['7', '8', '9', '/', 
                     '4', '5', '6', '*', 
                     '1', '2', '3', '-', 
                     '0', '.', '=', '+'];


    return (
        <div className={styles.buttonContainer}>
            {buttons.map((buttons)=>(
                <button className={styles.button}>{buttons}</button>
            ))}
      </div>

    );

};

export default ButtonsContainer;