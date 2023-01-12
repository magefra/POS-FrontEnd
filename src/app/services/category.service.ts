import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from '@shared/services/alert.service';
import { Observable } from 'rxjs';
import { Category, CategoryApi } from '../responses/category/category.response';
import { endpoint } from '@shared/apis/endpoint';
import { ListCategoryRequest } from '../requests/Category/list-category.request';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CategoryRequest } from '../requests/Category/category.request';
import { ApiResponse } from '../commons/response.interface';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private _http: HttpClient,
    private _alert: AlertService,
  ) { }

  GetAll(
    size,
    sort,
    order,
    page,
    getInputs
  ): Observable<CategoryApi>{

    
    const requestUrl = `${environment.api}${endpoint.LIST_CATEGORIES}`
    const params: ListCategoryRequest = new ListCategoryRequest(
      page +	1,
      order,
      sort,
      size,
      getInputs.numFilter,
      getInputs.textFilter,
      getInputs.stateFilter,
      getInputs.startDate,
      getInputs.endDate
    );
    
    var response =  this._http.post<CategoryApi>(requestUrl, params).pipe(
      map( (data: CategoryApi ) =>{
        data.data.items.forEach(function (e: any){
          switch(e.state){
            case  0:
              e.badgeColor = 'text-gray bg-gray-light'
              break
            case 1:
              e.badgeColor = 'text-green bg-green-light'
              break
            default:
              e.badgeColor = 'text-gray bg-gray-light'
          }
        })
        return data;
      })
    )

    return response;
  }


  CategoryRegister(category: CategoryRequest)
  :Observable<ApiResponse>{
    
    const requestUrl = `${environment.api}${endpoint.CATEGORY_REGISTER}`
    return this._http.post(requestUrl, category).pipe(
      map((resp: ApiResponse) =>{
        return resp
      })
    )
  }

  CategoryById(categoryId: number)
  :Observable<Category>{
    const requestUrl = `${environment.api}${endpoint.CATEGORY_BY_ID}${categoryId}`;

    console.log(requestUrl);
    return this._http.get(requestUrl).pipe(
      map((resp: ApiResponse) =>{
        return resp.data;
      })
    )
  }

  CategoryEdit(categoryId: number, category: CategoryRequest)
  :Observable<ApiResponse>{
    const requestUrl = `${environment.api}${endpoint.CATEGORY_EDIT}${categoryId}`;
    return this._http.put(requestUrl,category).pipe(
      map((resp: ApiResponse) =>{
        return resp;
      })
    )
  }

  CategoryRemove(categoryId: number)
  :Observable<void>{
    const requestUrl = `${environment.api}${endpoint.CATEGORY_REMOVE}${categoryId}`;
    return this._http.put(requestUrl,'').pipe(
      map((resp: ApiResponse) =>{
       if(resp.isSuccesss){
        this._alert.success('Excelente', resp.message)
       }
      })
    )
  }
}
