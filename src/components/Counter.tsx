import React, {useState} from 'react';
import styles from "./Counter.module.scss"

export const Counter = () => {

    const [state,setState] = useState(0)



    return (
        <div>
            <h1 >{state}</h1>

            <div className={styles.btn}>
                <button onClick={() => setState(state+1)}>+</button>
                <button onClick={() => setState(state-1)}>-</button>
            </div>

        </div>
    );
};

