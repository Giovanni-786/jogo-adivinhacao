import styles from './Attempts.module.css';

interface IAttempts{
    numbers: number[];
}

function Attempts({numbers}: IAttempts) {
    return(
        <section className={styles.attempts}>
            <h3>Números digitados 📝</h3>
            <ul>
                {numbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
        </section>
    )
}

export default Attempts