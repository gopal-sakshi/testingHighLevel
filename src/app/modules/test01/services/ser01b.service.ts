import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Service01B {
    
    constructor() {}

    getClubs():string[] {
        return ['RM', 'Bar', 'Atleti'];
    }
}