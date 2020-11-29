import { prisma } from "../../../../generated/prisma-client";
import { generateSecret } from "../../../utils";

export default {
  Mutation: {
    requestSecret: async (_, args) => {
      const { email } = args;
      const secret = generateSecret();
      console.log(secret);
      await prisma.updateUser({ data: { loginSecret }, where: { email } });
    },
  },
};
