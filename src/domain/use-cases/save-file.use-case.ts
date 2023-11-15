import * as fs from 'fs';


export interface SaveFileUseCase {
    execute: (options:Options)=> boolean;
}

export interface Options {
    fileContent: string;
    destination?: string;
    filename?: string;
}

export class SaveFile implements SaveFileUseCase{

    constructor(

    ){}

    execute({
        fileContent, 
        destination = 'outputs', 
        filename='table'
    }: Options) : boolean {
        try{
            fs.mkdirSync(destination, { recursive: true });
            fs.writeFileSync(`${destination}/${ filename }.txt`, fileContent);
            console.log('El archivo ha sido creado');
            return true;
            
        } catch (err) {
            console.error(err);
            return false;
        }
    }
}