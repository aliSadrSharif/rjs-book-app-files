import styles from "./Layout.module.css"

function Layout({children}) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p><a href="https://www.linkedin.com/in/ali-sadrsharif-525586348/">Ali Sadrsharif</a> | Book App</p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Contact me via <a href="">Linkdin</a> or <a href="mailto:alisadrsharif@gmail.com" >Email</a></p>
      </footer>
    </>
  );
}

export default Layout