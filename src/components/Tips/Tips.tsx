import styles from './Tips.module.css';

interface ITips{
    content: string[];
}

function Tips({content}: ITips) {
    return(
        <section className={styles.tips}>
            {content.map((content, index) => (
                <p key={index}> <span>💡</span> {content}</p>
            ))}
        </section>
    )
}

export default Tips