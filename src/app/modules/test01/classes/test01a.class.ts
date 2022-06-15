import { AppInjector } from "src/app/app-injector";
import { Service01B } from "../services/ser01b.service";

export class Test01A {

    /* 
        Basically, what we did
        a) We injected 'Service01B' at root level
        b) Then, we created 'AppInjector' ----> this class stores the 'Root Injector' instance
        c) This Test01A class -----> doesnt have any dependency 
            ---> meaning child classes (like Comp01cComponent) dont have to provide dependency injection to this class
        d) (in another words)
            we need the service to be available only in base class/component
            but not in those child components which are derived from base class/component
        e) (OR) 
            I don't want to use constructor injection because I'm using the injector in a base component which derived by many components and I rather not inject the injector to all of them.
    */
    constructor() {}

    getClubs1() {
        const service01B = AppInjector.get(Service01B);
        var clubs24 = service01B.getClubs();
        console.log(clubs24);
        return clubs24;
    }

    
}