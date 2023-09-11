import styles from './styles.module.css'
import type { ICategoryEdited } from '../../types/category';
import CategoryApi from '../../api/category.api';

import { useState } from 'react';
import CategoryModalItem from './CategoryModalItem';

type CategoryModalProps = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    categories: ICategoryEdited[],
    setCategoryList: React.Dispatch<React.SetStateAction<ICategoryEdited[]>>
}

const CategoryModal = ({setIsOpen, categories, setCategoryList}: CategoryModalProps) => {

    const closeModal = (e: MouseEvent) => {
        e.stopPropagation()
        if(e.target === e.currentTarget) setIsOpen(false)
    }

    const handlerEdit = async (categoryId: number, categoryTitle: string) => {
        console.log(categoryId, categoryTitle)
        const apiEditResult = await CategoryApi.update({
            id: categoryId,
            title: categoryTitle
        })
        console.log(apiEditResult)
        if(apiEditResult){
            const newCategories = categories.map(category => {
                if(category.id === categoryId){
                    return {...category, title: categoryTitle}
                }else{
                    return category
                }
            })
            setCategoryList(newCategories)
        }
    }

    const handlerClickDelete = (id: number) => {
        CategoryApi.delete({id})
    }

    return(
        <>
        {
            <div className={ styles.wrapper } onClick={closeModal} >
            <div className={ styles.addOpen }>

                {categories.map(category =>
                    <CategoryModalItem category={category} handlerEdit={handlerEdit} handlerDelete={handlerClickDelete} />
                )}

                <button className={styles.cancel + ' '+ styles.actionBtn} onClick={closeModal}></button>
            </div>
            </div>
        }
        </>
    )
}

export default CategoryModal
