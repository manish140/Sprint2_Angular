import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http';
import { retry,catchError} from 'rxjs/operators';  
import { Observable,pipe,throwError} from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

export class Airport {
  airportName:String;
  airportCode:String;
  airportLocation:String;
}

@Injectable({
  providedIn: 'root'
})
export class AirportService {
  private baseUrl1="http://localhost:8082/airport";
  constructor(private http:HttpClient) { }


  addAirport(airport: object): Observable<object> {  
    return this.http.post('http://localhost:8082/airport/addAirport',airport);  
  }
  getAirportList(): Observable<any> {  
    return this.http.get('http://localhost:8082/airport/allAirports');  
  } 
  getAirport(airportCode: String): Observable<Object> {  
    return this.http.get('http://localhost:8082/airport/airport/{airportCode}');  
  } 
  
  deleteAirport(airportCode: String): Observable<any> { 
    const url = `${this.baseUrl1}/${airportCode}`; 
    return this.http.delete(url,httpOptions).pipe(
      catchError(this.handleError)
    ); 
  }  
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
