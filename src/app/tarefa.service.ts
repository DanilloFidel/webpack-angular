import { Tarefa } from "./tarefa.model";
import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers, Response } from "@angular/http";
import { HttpHeaders, HttpClient} from '@angular/common/http'
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class TarefaService{

    constructor(private http: Http,
        private httpCliente: HttpClient){}


    public getTarefas(): Promise<Tarefa[]>{
         return this.http.get('http://localhost:3000/tarefas')
        .toPromise()
        .then((resposta: any)=> resposta.json())
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
        return this.httpCliente.delete(`http://localhost:3000/tarefas/${id}`)
    }
       
    
}