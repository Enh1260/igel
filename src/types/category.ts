export interface ICategory{
    id: number;
    title: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ICategoryEdited{
    id: number;
    title: string;
    isActive: boolean
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ICategoryCreate{
    title: string
}

export interface ICategoryUpdate{
    id: number;
    title: string;
}

export interface ICategoryDelete{
    id: number;
}
