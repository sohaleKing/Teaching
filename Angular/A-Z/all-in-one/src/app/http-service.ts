import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    baseUrl: string = 'https://jsonplaceholder.typicode.com/todos/1'
    constructor(private http: HttpClient) {}

    getData(): Observable<any> {
        return this.http.get<string>(this.baseUrl)
    }
}
