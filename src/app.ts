import { GraphQLServer, Options } from 'graphql-yoga';
import { Resolvers } from '@resolvers/resolvers';
import { container } from 'tsyringe';

export class Application {
    private readonly app: GraphQLServer;
    private readonly resolvers: Resolvers = container.resolve(Resolvers);

    constructor() {
        this.app = new GraphQLServer({
            typeDefs: './src/schemata/schema.graphql',
            resolvers: this.resolvers.resolvers as any
        })
    }
    listen(options?: ApplicationFactory.Options) {
        this.app.start(options, ({ port }) => console.log(`LISTEN ${port}`) );
    }
}

export namespace Application {
    export interface Option extends Options { }
};

export namespace ApplicationFactory {
    export interface Options extends Application.Option { }
    export function create(): Application {
        return new Application();
    }
};