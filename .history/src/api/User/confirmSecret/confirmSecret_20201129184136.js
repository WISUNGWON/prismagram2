export default {
  Mutation: {
    confirmSecret: async (_, args) => {
      const { email, secret } = args;
      const user = await prisma.user({ email });
      if (user.loginSecret === secret) {
        //JWT
        return "TOKEN";
      } else {
        return Error("wrong email/secret combination");
      }
    },
  },
};
