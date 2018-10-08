import { Component, OnInit, OnChanges} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { Tarefa } from '../tarefa.model';
import { TarefaService } from '../tarefa.service'
import { Observable, Subject } from 'rxjs';


@Component({
    selector: "app-panel",
    templateUrl: "./panel.component.html",
    styleUrls: ["./panel.component.scss"],
    providers: [ TarefaService ]
})
export class PanelComponent implements OnInit, OnChanges{

    //public tarefasDaLista: Tarefa[] = [];
    public tarefas: Observable<Tarefa[]>;
    public id: number = 0;

    public formulario: FormGroup = new FormGroup({
        "titulo": new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
        "descricao": new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
        "prioridade": new FormControl(null, [Validators.required]),
    })
    

    constructor(private tarefaService: TarefaService){}

    ngOnInit(){
        this.recuperarTarefas()
    }

    ngOnChanges(){

    }

    public cadastrarTarefa(): void {
        let tarefa = new Tarefa(
            this.formulario.value.titulo,
            this.formulario.value.descricao,
            this.formulario.value.prioridade,
        )
        this.tarefaService.setTarefa(tarefa)
        .subscribe()
        this.recuperarTarefas()
        this.formulario.reset()
    }

    public recuperarTarefas(): void{
        this.tarefas = this.tarefaService.getTarefas()
    }

    public deletarTarefa(id: any): void{
        document.getElementById(`${id}`).remove()
        this.tarefaService.removerTarefa(id)
        .subscribe()
    }


}
