import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { CustomTitleService } from '../../../shared/services/custom-title.service';
import { componentSettings } from './category-list-config';
import { CategoryApi } from '../../../responses/category/category.response';
import { stagger40ms } from 'src/@vex/animations/stagger.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import { scaleIn400ms } from 'src/@vex/animations/scale-in.animation';

@Component({
  selector: 'vex-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  animations: [
    stagger40ms,
    scaleIn400ms,
    fadeInRight400ms,
  ]
})
export class CategoryListComponent implements OnInit {
 
  component

  constructor(
    cumstonTitle: CustomTitleService,
    public _categoryService: CategoryService
  ) 
  {
    cumstonTitle.set('Categorias');

  }

  ngOnInit(): void {
    this.component = componentSettings
  }

  rowClick(e: any){
    let action = e.action
    let category = e.row.category

    switch(action){
      case 'edit':
        this.CategoryEdit(category)
        break;
      case 'remove':
        this.CategoryRemove(category)
        break;
      }
      return false
  }


  CategoryRemove(row: CategoryApi) {
    
  }
  CategoryEdit(row: any) {
    
  }

}
