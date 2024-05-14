import NextAuth, { AuthOptions } from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/types/user";
import { connectMongoDB } from "@/libs/mongodb";

export const authOptions: any = {
  providers: [
    // CredentialsProvider({
    //   id: "credentials",
    //   name: "Credentials",
    //   credentials: {
    //     email: { label: "Email", type: "text" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials: any) {
    //     await connectMongoDB();
    //     try {
    //       const user = await User.findOne({ email: credentials.email });
    //       if (!user) {
    //         return null;
    //       }
    //       const isPasswordCorrect = await bcrypt.compare(
    //         credentials.password,
    //         user.password
    //       );
    //       if (!isPasswordCorrect) {
    //         return null;
    //       }
    //       return user;
    //     } catch (err: any) {
    //       throw new Error(err);
    //     }
    //   },
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const formEmail = credentials?.email as string;
        const plainPassword = credentials?.password as string;
        // connect to the database
        await connectMongoDB();
        // find the email address
        const isUserExist = await User.findOne({ email: formEmail });

        if (!isUserExist) {
          return null;
        }

        // validate the password
        const isValidPassword = await bcrypt.compare(
          plainPassword,
          isUserExist?.password
        );
        // console.log("isValidPassword", isValidPassword);
        if (!isValidPassword) {
          return null;
        }

        // return
        return {
          id: isUserExist?._id,
          name: isUserExist?.username || "Anonymous",
          email: isUserExist?.email,
          image: isUserExist?.image,
        };
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    // ...add more providers here
  ],

  callbacks: {
    // async signIn({ user, account }: { user: AuthUser; account: Account }) {
    //   if (account?.provider == "credentials") {
    //     return true;
    //   }
    //   // if (account?.provider == "google") {
    //   //   return true;
    //   // }
    //   // if (account?.provider == "github") {
    //   //   return true;
    //   // }
    // },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};
