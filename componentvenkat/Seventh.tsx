import styles from '../styles/stylesvenkat/Home.module.css'
const Seventh = ({sitemap, accessibility, language, terms, privacyPolicy}) => {
   
    return (
        <>
            <div>
                <div className={styles.fiveitems}>
                  <p className={styles.footeritems}>{sitemap}</p>
                  <p className={styles.footeritems}>{accessibility}</p>
                  <p className={styles.footeritems}>{language}</p>
                  <p className={styles.footeritems}>{terms}</p>
                  <p className={styles.footeritems}>{privacyPolicy}</p>
                </div>
            </div>
        </>
    )
}

export default Seventh