import { Tarefa } from "./tarefa.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class TarefaService{

    constructor(private http: Http){}

    public tarefas: Tarefa[] = [{
      id: 1,
      titulo: "json-server",
      descricao: "typicode",
      prioridade: 1
    }]

    public getTarefas(): Tarefa[]{
        return this.tarefas
    }
}