import { Mysql } from "./mysql";
import {injectable, container} from "tsyringe";

@injectable()
export class Database {
    private mysql: Mysql = container.resolve(Mysql);
    constructor() { }
    
    public async query<Item extends object >(query: string, options?): Promise<Array<Item>> {
        try {
            const result = await this.mysql.query(query);
            return JSON.parse(result);
        } catch (error) {
            throw error;
        }
    }
}