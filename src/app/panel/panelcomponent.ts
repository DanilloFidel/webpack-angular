import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Tarefa } from '../tarefa.model';

@Component({
    selector: "app-panel",
    templateUrl: "./panel.component.html",
    styleUrls: ["./panel.component.scss"]
})
export class PanelComponent implements OnInit{

    public titulo: string;
    public descricao: string;
    public prioridade: number;
    public tarefas: Tarefa[] = [];


    public formulario: FormGroup = new FormGroup({
        "titulo": new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
        "descricao": new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
        "prioridade": new FormControl(null, [Validators.required]),
    })
    

    constructor(){}

    ngOnInit(){

    }

    ngOnChanges(){
        
    }

    public cadastrarTarefa(): void {
        let tarefa = new Tarefa(
            this.formulario.value.titulo,
            this.formulario.value.descricao,
            this.formulario.value.prioridade,
        )
        this.tarefas.push(tarefa)
        this.setTarefa(this.tarefas)
        this.formulario.reset()
    }

    public setTarefa(novaTarefa: Tarefa[]): void{
        localStorage.setItem("tarefa", JSON.stringify(novaTarefa))
    }

    public getTarefa(): Array<object>{
        let tarefa = localStorage.getItem("tarefa")
         return JSON.parse(tarefa)
    }
}
