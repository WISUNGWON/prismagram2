import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    sayHello: async () => {
      console.log(await prisma.user());
      return "Hello";
    },
  },
};
