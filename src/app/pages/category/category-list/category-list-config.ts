import { Category } from 'src/app/responses/category/category.response';
import { TableColumn } from '../../../../@vex/interfaces/table-column.interface';
import icCategory from "@iconify/icons-ic/twotone-category"

const tableColumns : TableColumn<Category>[] =[
  {
    label: 'Nombre',
    property: 'name',
    type: 'text',
    cssClasses: ['font-medium', 'w-10'],
  },
  {
    label: 'Descripción',
    property: 'description',
    type: 'textTruncate',
    cssClasses: ['font-medium', 'w-10'],
  },
  {
    label: 'F. Creación',
    property: 'auditCreateDate',
    type: 'datetime',
    cssClasses: ['font-medium', 'w-10'],
  },
  {
    label: 'Estado',
    property: 'stateCategory',
    type: 'text',
    cssClasses: ['font-medium', 'w-10'],
  },
  {
    label: '',
    property: 'menu',
    type: 'buttonGroup',
    buttonItems: [
        {
            buttonLabel: "EDITAR",
            buttonAction: "edit",
            buttonCondition: null,
            disable: false
        },
        {
            buttonLabel: "ELIMINAR",
            buttonAction: "remove",
            buttonCondition: null,
            disable: false
        }
    ],
    cssClasses: ['font-medium', 'w-10'],
  }
];

export const componentSettings = {
    //icons
    icCategory:  icCategory,
    tableColumns: tableColumns,
    initialSort: "Id",
    initialSortDir: "desc",
    buttonLabel: "EDITAR",
    buttonLabel2: "ELIMINAR",
    columnsFilter: tableColumns.map((column) => { return {label: column.label, property: column.property, type: column.type}})


}