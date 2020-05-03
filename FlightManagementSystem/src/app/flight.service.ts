import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  
  private baseUrl = 'http://localhost:4567/flights';
  constructor(private http:HttpClient) { }
  getFlightList():Observable<any>{
    return this.http.get('$(this.baseurl)'+'allFlights');
  }

  addFlight(flight: object): Observable<object> {  
    return this.http.post('${this.baseUrl}/addFlight', flight);  
  }  

  deleteFlight(flightNumber: number): Observable<any> {  
    return this.http.delete('${this.baseUrl}/deleteFlight/${flightNumber}', { responseType: 'text' });  
  }  
  getFlight(flightNumber: number): Observable<Object> {  
    return this.http.get('${this.baseUrl}/flightid/${flightNumber}');  
  }  

  updateFlight(flightNumber: number, value: any): Observable<Object> {  
    return this.http.post('${this.baseUrl}/modify/${flightNumber}', value);  
  }  
}
