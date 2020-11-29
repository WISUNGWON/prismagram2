require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";

const PORT = process.env.PORT || 4000;

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
