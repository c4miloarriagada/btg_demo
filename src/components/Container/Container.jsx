import styles from './Container.module.css'

export const Container = (props) => {
  return (
    <main className={styles.container}>
        {props.children}
    </main>
  )
}
