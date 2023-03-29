export enum CATEGORIES_ACTION_TYPES {
    SET_CATEGORIES = 'category/SET_CATEGORIES',
    FETCH_CATEGORIES_START = 'category/FETCH_CATEGORIES_START',
    FETCH_CATEGORIES_SUCCESS = 'category/FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_FAILED = 'category/FETCH_CATEGORY_FAILED'
}

export type CategoryItem = {
    id: number;
    imageURL: string;
    name: string;
    price: number;
}

export type Category = {
    title: string;
    imageURL: string;
    items: CategoryItem;
}

export type CategoryMap = {
    [key: string]: CategoryItem;
}