import * as mysql from "mysql2/promise";
import { MYSQL_HOST, MYSQL_PASSWORD, MYSQL_PORT, MYSQL_USER } from "@config";
import {injectable, container} from "tsyringe";


@injectable()
export class Mysql {
    private readonly mysql;
    constructor() {
        this.mysql = mysql.createPool({
            host: MYSQL_HOST,
            user: MYSQL_USER,
            password: MYSQL_PASSWORD,
            port: MYSQL_PORT,
            database: 'MEETING',
            timezone: 'utc',
        });
    }
    
    public async query(query: string) {
        try {
            console.log(this.mysql.format(query));
            const [ result ] = await this.mysql.query(query) as Array<any>;
            const conn = await this.mysql.getConnection();
            conn.release();
            return JSON.stringify(result);
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}