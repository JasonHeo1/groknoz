import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Customer } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8080/api/customers';
  
  constructor(private http: HttpClient) { }

  getCustomer(id: number): Observable<Object> {

    return this.http.get('${this.baseUrl}/${id}');    
  }

  createCustomer(customer: Customer): Observable<Object>{
    return this.http.post('${this.baseUrl}' + '/create', customer);
  }

  updateCustomer(id: number, value: any): Observable<Object> {
    return this.http.put('${this.baseUrl}/${id}', value);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete('${this.baseUrl}/${id}', {responseType: 'text'});
  }

  // getCustomerList(): Observable<Customer> {
  //   return this.http.get<Customer>('${this.baseUrl}');
  // }

  getCustomerList(): Observable<any> {
    return this.http.get('${this.baseUrl}');
  }

  // getCustomerByAge(age: number): Observable<Customer> {
  //   return this.http.get<Customer>('${this.baseUrl}/age/${age}');
  // }

  getCustomerByAge(age: number): Observable<any> {
    return this.http.get('${this.baseUrl}/age/${age}');
  }

  deleteAll(): Observable<any> {
    return this.http.delete('${this.baseUrl}' + '/delete', {responseType: 'text'});
  }


}
