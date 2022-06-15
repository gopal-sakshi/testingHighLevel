import { Injectable } from "@angular/core";

@Injectable()
export class Service01A {

    names01:string[] = ['CR7', 'KB9', 'LM10'];
    constructor() {}

    getNames23():string[] {
        return this.names01
    }

    updateNames23(newNames:string[]):void {
        this.names01 = newNames;
    }

}