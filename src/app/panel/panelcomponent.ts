import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Tarefa } from '../tarefa.model';

@Component({
    selector: "app-panel",
    templateUrl: "./panel.component.html",
    styleUrls: ["./panel.component.scss"]
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
    

    constructor(){}

    ngOnInit(){

    }

    ngOnChanges(){
        
    }

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
        this.definirPrioridade(p)
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
