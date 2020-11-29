require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";

const typeDefs = `
    type Query {
        hello : String!
    }
`;

const server = new GraphQLServer({ typeDefs });
