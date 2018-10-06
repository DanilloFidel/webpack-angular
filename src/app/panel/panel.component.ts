import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from "@angular/http";

import { Tarefa } from '../tarefa.model';
import { TarefaService } from '../tarefa.service'


@Component({
    selector: "app-panel",
    templateUrl: "./panel.component.html",
    styleUrls: ["./panel.component.scss"],
    providers: [ TarefaService ]
})
export class PanelComponent implements OnInit{


    public tarefas: Tarefa[] = null;
    public id: number = 0;
    public prioridade: string = ""



    public formulario: FormGroup = new FormGroup({
        "titulo": new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
        "descricao": new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
        "prioridade": new FormControl(null, [Validators.required]),
    })
    

    constructor(private tarefaService: TarefaService){}

    
    

    public cadastrarTarefa(): void {
        if(this.tarefas === null){
            this.tarefas = []
        }
        let tarefa = new Tarefa(
            this.id++,
            this.formulario.value.titulo,
            this.formulario.value.descricao,
            this.formulario.value.prioridade,
        )
        console.log(tarefa)
        let p = tarefa.prioridade
        this.tarefas.push(tarefa)
        this.formulario.reset()
    }

    public deletarTarefa(id: any): void{
        document.getElementById(`${id}`).remove()
    }

    public definirPrioridade(p: number): void{
        console.log(p)
        if(p == 1){
            this.prioridade = "p1"
        }else if(p == 2){
            this.prioridade = "p2"
        }else if(p == 3){
            this.prioridade = "p3"
        }
    }

}
