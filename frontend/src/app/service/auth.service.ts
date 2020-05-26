import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private signUpURL = "http://localhost:3003/api/user"//URL del backend
  private loginURL = "http://localhost:3003/api/auth" // Devuelve un observable con los datos
  
    constructor(private http: HttpClient,
    private router: Router) { }

  signUpUser(user){
     return this.http.post<any>(this.signUpURL,user)//devuelve en esto caso un tipo de objeto any, se acepta todo, se le pasan dos parámetros url a la cual se lanza, lo q se quiere enviar por el body, en este caso el objeto user
    }
   
  loginUser(user){
   return this.http.post<any>(this.loginURL,user)
  }
  
  isLogged(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')//accede al local storage y recupera la variable nombrada token
  }

  logoutUser(){
    localStorage.removeItem('token')// Si no hay token es porq no está loggeado
    this.router.navigate(['/login'])
  }
}
