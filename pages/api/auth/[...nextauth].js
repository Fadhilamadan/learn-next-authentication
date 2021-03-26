import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  database: process.env.DATABASE_URL,

  secret: process.env.SECRET,

  session: {
    jwt: true,
  },

  jwt: {},

  pages: {},

  callbacks: {},

  events: {},

  debug: false,
});
