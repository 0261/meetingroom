import 'reflect-metadata';
import { Application, ApplicationFactory} from "@src/app";
import { Options } from "graphql-yoga";

try{
    const option: Options = {
        port: process.env.PORT || 4000,
        playground: '/playground',
        endpoint: '/graphql' ,
    }
    const app: Application = ApplicationFactory.create();
    app.listen(option);
} catch(error) {
    console.log(error);
    process.exit(1);
}