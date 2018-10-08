import { Component, OnInit, OnChanges} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { Tarefa } from '../tarefa.model';
import { TarefaService } from '../tarefa.service'


@Component({
    selector: "app-panel",
    templateUrl: "./panel.component.html",
    styleUrls: ["./panel.component.scss"],
    providers: [ TarefaService ]
})
export class PanelComponent implements OnInit, OnChanges{


    public tarefas: Tarefa[];
    public id: number = 0;



    public formulario: FormGroup = new FormGroup({
        "titulo": new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
        "descricao": new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
        "prioridade": new FormControl(null, [Validators.required]),
    })
    

    constructor(private tarefaService: TarefaService){}

    ngOnInit(){
        this.tarefaService.getTarefas()
        .then(( tarefa: Tarefa[])=>{
            this.tarefas = tarefa
        })
        .catch((param: any)=>{
            console.log(param)
        })
    }

    ngOnChanges(){
        
    }

    public cadastrarTarefa(): void {
        if(this.tarefas === null){
            this.tarefas = []
        }
        let tarefa = new Tarefa(
            this.formulario.value.titulo,
            this.formulario.value.descricao,
            this.formulario.value.prioridade,
        )
        this.tarefaService.setTarefa(tarefa)
        .subscribe()
        this.formulario.reset()
    }

    public recuperarTarefas(): void{
        
    }

    public deletarTarefa(id: any): void{
        document.getElementById(`${id}`).remove()
        this.tarefaService.removerTarefa(id)
        .subscribe()
    }


}
