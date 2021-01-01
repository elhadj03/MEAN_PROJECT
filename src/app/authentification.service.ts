import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

const HttpOptions = {
  headers : new HttpHeaders ({
    "Access-Control-Allow-Methods" : "GET, POST",
    "Access-Control-Allow-Headers" : "Content-type", 
    "Access-Control-Allow-Origin" : "*",
    "Content-type" : "application/json"
  })
}

@Injectable({ providedIn: 'root'})
export class AuthentificationService {
  private user : Subject<string>=new BehaviorSubject<string>(undefined);
  private baseURL : string="http://localhost:8888/";

  constructor( private http: HttpClient) { }

  get(){ return this.user.asObservable(); }

  getUser() {
    return this.user;
  }
  
  connect(data: string) {
    this.user.next(data);
  }
  
  disconnect() {
    this.user.next(null);
  }
  
  addutilisateur(data): Observable<any> {
    return this.http.post(this.baseURL+'membres/inscription', JSON.stringify(data), HttpOptions);
  }

  verificationConnexion(identifiants) : Observable<any> {
    return this.http.post("http://localhost:8888/membres/connexion", JSON.stringify(identifiants), HttpOptions);
  }
}
