import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";


interface RunOptions {
    base:number;
    limit: number;
    display: boolean;
}

export class ServerApp {
    
    static run({base, limit, display}: RunOptions) {
        console.log('Server running...')

        const table = new CreateTable().execute({base, limit});
        const wasCreated = new SaveFile().execute({
            fileContent: table,
            filename: `table-${base}.txt`});

        if (display) {
            console.log(table);
        }

        ( wasCreated)
            ? console.log('File created')
            : console.log('File not created');
    }

}