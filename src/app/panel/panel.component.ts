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
    public tarefaId: number;



    public formulario: FormGroup = new FormGroup({
        "titulo": new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
        "descricao": new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
        "prioridade": new FormControl(null, [Validators.required]),
    })
    

    constructor(private tarefaService: TarefaService){}

    ngOnInit(){
        this.tarefas = this.tarefaService.getTarefas()
      /* this.tarefas = this.getTarefa();
      this.tarefas = this.hhtp.get('localhost:3000/tarefas')
        .toPromise()
        .then((resposta: any)=> resposta.JSON())
        console.log(x)
        */
    }

    ngOnChanges(){
        
    }

    public cadastrarTarefa(): void {
        if(this.tarefas === null){
            this.tarefas = []
        }
        let tarefa = new Tarefa(
            this.tarefaId = Math.floor((Math.random() * 100) + 1),
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

    public getTarefas(): void{
        
    }

    public deletarTarefa(id: number): void{
        document.getElementById(`${id}`).remove()
    }

}
