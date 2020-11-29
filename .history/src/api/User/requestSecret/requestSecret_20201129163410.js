import { generateSecret } from "../../../utils";

export default {
  Mutation: {
    requestSecret: async (_, args) => {
      const { email } = args;
      const secret = generateSecret();
      console.log(secret);
    },
  },
};
