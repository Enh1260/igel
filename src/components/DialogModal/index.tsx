import styles from './styles.module.css'

type DialogModalProps = {
    title: string,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    handler: any
}

const DialogModal = ({setIsOpen, title, handler}: DialogModalProps) => {

    const closeModal: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement> = (e) => {
        e.stopPropagation()
        if(e.target === e.currentTarget) setIsOpen(false)
    }

    const handlerSubmit = () => {
        handler()
        setIsOpen(false)
    }

    return(
        <>
        {
            <div className={ styles.wrapper } onClick={closeModal} >
            <div className={ styles.container }>
                <div className={styles.text}>{title}</div>
                <div className={styles.actions}>
                    <button className={styles.accept + ' '+ styles.actionBtn} onClick={handlerSubmit}></button>
                    <button className={styles.cancel + ' '+ styles.actionBtn} onClick={closeModal}></button>
                </div>

            </div>
            </div>
        }
        </>
    )
}

export default DialogModal
