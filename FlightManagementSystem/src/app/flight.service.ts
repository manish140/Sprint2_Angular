import { Injectable,Pipe } from '@angular/core';
import { HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http';
import { retry,catchError} from 'rxjs/operators';  
import { Observable,pipe,throwError} from 'rxjs';
import { Flight } from './flight';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class FlightService {
  private baseUrl = 'http://localhost:4568/flights';
  private baseUrl1="http://localhost:4567/airport";
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
   //return this.http.get(`${this.baseUrl}/${flightNumber}`);
  }  
 /* updateFlight(flightNumber: number, value: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}/modify/${flightNumber}`, value);  
  }*/
  updateFlight(flight:Flight) : any
  {
      return this.http.put('http://localhost:4568/flights/modify',flight);
  }
   

  addAirport(airport: object): Observable<object> {  
    return this.http.post('http://localhost:4567/airport/addAirport',airport);  
  }
  getAirportList(): Observable<any> {  
    return this.http.get('http://localhost:4567/airport/allAirports');  
  } 
  getAirport(airportCode: String): Observable<Object> {  
    return this.http.get('http://localhost:4567/airport/airport/{airportCode}');  
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
