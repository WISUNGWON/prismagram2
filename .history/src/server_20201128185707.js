require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";

const typeDefs = `
    type Query {
        hello : String!
    }
`;

const resolvers = {
  Query: {
    hello: {},
  },
};
const server = new GraphQLServer({ typeDefs });

server.start({ port });
