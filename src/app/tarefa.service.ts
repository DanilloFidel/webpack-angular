import { Tarefa } from "./tarefa.model";
import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers, Response } from "@angular/http";
import { Observable } from "rxjs";
import { map, retry } from "rxjs/operators";

@Injectable()
export class TarefaService{

    constructor(private http: Http,
        /*private httpCliente: HttpClient*/){}


    public getTarefas(): Observable<Tarefa[]>{
         return this.http.get('http://localhost:3000/tarefas')
         .pipe( map((response: Response) => response.json()),retry(5))
         
    }

    public setTarefa(tarefa: Tarefa): Observable<number>{

        let headers: Headers = new Headers()
        headers.append('Content-type','application/json')

        return this.http.post(
            'http://localhost:3000/tarefas', 
            JSON.stringify(tarefa),
            new RequestOptions({ headers: headers})
            )
            .pipe(map((response: Response)=>response.json().id))
    }

    public removerTarefa(id: number): Observable<any> {
        return this.http.delete(`http://localhost:3000/tarefas/${id}`)
    }
       
    
}