import { Injectable,Pipe } from '@angular/core';
import { HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http';
import { retry,catchError} from 'rxjs/operators';  
import { Observable,pipe,throwError} from 'rxjs';
import { User } from '../user';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
export class Flight {

  flightNumber:number;
  flightModel:String;
  carrierName:String;
  seatCapacity:number;
  
}

@Injectable({
  providedIn: 'root'
})

export class FlightService {
  private baseUrl = 'http://localhost:4567/flights';
  private baseUrl2="http://localhost:4569/users";
  constructor(private http:HttpClient) { }
  getFlightList():Observable<any>{
    return this.http.get(`${this.baseUrl}`+'/allFlights');  
  }

  addFlight(flight: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'/addFlight', flight);  
  }
  deleteFlight(flightNumber: number): Observable<{}> {  
    const url = `${this.baseUrl}/${flightNumber}`;
    return this.http.delete(url,httpOptions).pipe(
      catchError(this.handleError)
    );
  }  
  getFlight(flightNumber: number): Observable<Object> {  
    const url=`${this.baseUrl}/${flightNumber}`;
    return this.http.get<Flight>(url,httpOptions).pipe(
    catchError(this.handleError));
  }  
  updateFlight(flight:Flight) : any
  {
      return this.http.put('http://localhost:4567/flights/modify',flight);
  }
   

  addUser(user: object): Observable<object> {  
    return this.http.post(`${this.baseUrl2}`+'/addUser', user);  
  }
  getUserList():Observable<any>{
    return this.http.get(`${this.baseUrl2}`+'/allUsers');  
  }
  deleteUser(userId: number): Observable<{}> {  
    const url = `${this.baseUrl2}/${userId}`;
    return this.http.delete(url,httpOptions).pipe(
      catchError(this.handleError)
    );
  }  
  loginUser(user:User):Observable<any>{
    return this.http.post<any>(`${this.baseUrl2}`+'/login', user);
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
