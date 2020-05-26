import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private listTaskUrl = "http://localhost:3003/api/task/list"
  private taskUrl= "http://localhost:3003/api/task"
  private taskImageUploadUrl= "http://localhost:3003/api/task/upload"
  constructor(private http: HttpClient) { }


  createImageUpload(task){
    return this.http.post<any>(this.taskImageUploadUrl,task) //se envía task al backend
  
  }
  createTask(task){
    return this.http.post<any>(this.taskUrl,task) //se envía task al backend
  }

 editTask(task){
   return this.http.put<any>(this.taskUrl,task)
 } 

 deleteTask(task){
   const _id = task._id
   const url = `${this.taskUrl}/${_id}`
   return this.http.delete<any>(url)
 }
  getTasks(){
    return this.http.get<any>(this.listTaskUrl)
  }
}
