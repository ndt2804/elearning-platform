import NextAuth, { AuthOptions } from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/types/user";
import { connectMongoDB } from "@/libs/mongodb";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        await connectMongoDB();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            }
          }
          return null;
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
    GithubProvider({
      clientId: process.env.githubID ?? "",
      clientSecret: process.env.githubSecret ?? "",
    }),
    GoogleProvider({
      clientId: process.env.googleID ?? "",
      clientSecret: process.env.googleSecret ?? "",
    }),
    // ...add more providers here
  ],

  // callbacks: {
  //   async signIn({ user, account }: { user: AuthUser; account: Account }) {
  //     if (account?.provider == "credentials") {
  //       return true;
  //     }
  //     if (account?.provider == "google") {
  //       return true;
  //     }
  //     if (account?.provider == "github") {
  //       return true;
  //     }
  //   },
  // },
  secret: process.env.authSecret,
  session: {
    strategy: "jwt",
  },
};
