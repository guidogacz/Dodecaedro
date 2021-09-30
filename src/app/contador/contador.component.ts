import { Component } from '@angular/core';

@Component ({
    selector: 'app-contador',
    template: `

        <h1> {{titulo}} </h1>
        <h3>La Base es: <strong>{{base}}</strong></h3>

        <button (click)="acumular(base)"> +{{base}} </button>

        <span> {{ numero }} </span>

        <button (click)="acumular(-base)"> -{{base}} </button>

    `
})

export class ContadorComponent{

    titulo: string= 'Contador App';
    numero: number = 10;
    base: number= 5;

    acumular(valor: number){
    this.numero += valor;
  }

}

function Base(arg0: { selector: string; template: boolean; }, arg1: { titulo: any; }, arg2: boolean, Base: any, es: any, arg5: {}, arg6: { base: any; }, arg7: boolean, arg8: boolean, arg9: { base: any; }, arg10: boolean, arg11: { numero: any; }, arg12: boolean, arg13: boolean, arg14: { base: any; }, arg15: any, arg16: string) {
    throw new Error('Function not implemented.');
}


function es(arg0: { selector: string; template: boolean; }, arg1: { titulo: any; }, arg2: boolean, Base: any, es: any, arg5: {}, arg6: { base: any; }, arg7: boolean, arg8: boolean, arg9: { base: any; }, arg10: boolean, arg11: { numero: any; }, arg12: boolean, arg13: boolean, arg14: { base: any; }, arg15: any, arg16: string) {
    throw new Error('Function not implemented.');
}


function button(click: any) {
    throw new Error('Function not implemented.');
}


function click(click: any) {
    throw new Error('Function not implemented.');
}
