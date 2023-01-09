export interface Category{
    categoryId: number
    name: string
    description: string
    auditCreatedDate: Date
    state: number
    stateCategory: string
}


export interface CategoryApi{
    date: any,
    totalRecords: number
}
