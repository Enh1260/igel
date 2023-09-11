import { useState } from 'react'
import styles from './styles.module.css'
import DialogModal from '../../DialogModal'
import type { ICategoryEdited } from '../../../types/category'

type CategoryModalItemProps = {
    category: ICategoryEdited,
    handlerEdit: (categoryId: number, value: string) => void,
    handlerDelete: (categoryId: number) => void
}

const CategoryModalItem = ({category, handlerDelete, handlerEdit}: CategoryModalItemProps) => {

    const [titleValue, setTitleValue] = useState(category.title)
    const [isDisabled, setIsDisabled] = useState(true)
    const [isDialogModalOpen, setIsDialogModalOpen] = useState(false)

    const handlerClickEdit = (id: number, title: string) => {
        handlerEdit(id, title)
        setIsDisabled(true)
    }
    const handlerClickDelete = () => {
        handlerDelete(category.id)
    }

    return(
        <>
        <div className={styles.item}>
            <input 
                type="text" 
                className={styles.itemInput} 
                value={titleValue} 
                onChange={(e) => setTitleValue(e.target.value)}
                disabled={isDisabled}
                />
            <div className={styles.actions}>
                {isDisabled ?
                    <button className={styles.edit+ ' '+ styles.actionBtn} onClick={() => setIsDisabled(false)}></button>
                : <>
                    <button className={styles.accept + ' '+ styles.actionBtn} onClick={() => handlerClickEdit(category.id, titleValue)}></button>
                    <button className={styles.cancel + ' '+ styles.actionBtn} onClick={() => setIsDisabled(true)}></button>                
                  </>
                }
                <button className={styles.delete+ ' '+ styles.actionBtn} onClick={() => setIsDialogModalOpen(true)}></button>
            </div>
        </div>
        {isDialogModalOpen && <DialogModal 
            title={`Вы хотите удалить категорию ${category.title}?`} 
            handler={handlerDelete}
            setIsOpen={setIsDialogModalOpen}
            />
        }
        </>
    )
}

export default CategoryModalItem
