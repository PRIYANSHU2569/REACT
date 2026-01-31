import styles from "./ButtonContainer.module.css";


const ButtonsContainer = () => {

    const buttons = ['7', '8', '9', '/', 
                     '4', '5', '6', '*', 
                     '1', '2', '3', '-', 
                     '0', '.', '=', '+'];


    return (
        <div className={styles.buttonContainer}>
       
            {buttons.map((btn, index) => (
                <button key={index} className={styles.button}>
                    {btn}
                </button>
            ))}

      </div>

    );

};

export default ButtonsContainer;