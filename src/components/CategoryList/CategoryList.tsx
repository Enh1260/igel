import { useState } from 'react'
import type { ICategoryEdited } from "../../types/category"
import styles from './styles.module.css'
import CategoryModal from "../CategoryAddModal/CategoryModal"


type CategoryListProps = {
    categories: ICategoryEdited[],
    setCategoryList: React.Dispatch<React.SetStateAction<ICategoryEdited[]>>
}

const CategoryList = ({categories, setCategoryList}: CategoryListProps) => {

    const changeActiveCategory = (activeCategoryId: number) => {
        const editingCategories = categories.map(category => {
            if(category.id === activeCategoryId){
                return {...category, isActive: true}
            }else{
                return {...category, isActive: false}
            }
        })
        setCategoryList(editingCategories)
    }

    const [isModalOpen, setIsModalOpen] = useState(false)

    return(
        <>
        { isModalOpen && 
            <CategoryModal 
                categories={categories} 
                setCategoryList={setCategoryList} 
                setIsOpen={setIsModalOpen} /> 
        }
        <div className={styles.wrapper}>
            {
                categories.map(category => 
                    {
                        if(category.isActive){
                            return <div 
                                    className={styles.item+' '+styles.active} 
                                    onClick={() => changeActiveCategory(category.id)}>
                                        {category.title}
                                    </div>
                        }else{
                            return <div 
                                    className={styles.item} 
                                    onClick={() => changeActiveCategory(category.id)}>
                                        {category.title}
                                    </div>
                        }
                    }
                )
            }
            <div className={styles.btnAdd} onClick={() => setIsModalOpen(true)}>+</div>
        </div>
        </>
    )
}

export { CategoryList }
