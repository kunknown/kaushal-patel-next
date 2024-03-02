import Credentials from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";
import { getUser } from "@/shared/database/sql/db";
import { TUser } from "@/shared/types-interfaces-enums/types";
import { comparePassword } from "@/shared/utility/bcrypt-utils";

export const config: NextAuthConfig = {
  // adapter: {
  //   createSession() {
  //     console.log("**createSession");
  //     return {
  //       expires: new Date(),
  //       sessionToken: "1234",
  //       userId: "test@test.com",
  //     };
  //   },
  //   createUser(user) {
  //     console.log("**createUser", user);
  //     return user;
  //   },
  //   deleteSession(sessionToken) {
  //     console.log("**deleteSession", sessionToken);
  //     return null;
  //   },
  //   getUserByEmail(email) {
  //     console.log("getUserByEmail", email);
  //     return null;
  //   },
  // },
  callbacks: {
    // async authorized({ request, auth }) {
    //   const { pathname } = request.nextUrl;
    //   console.log("* pathname", pathname);
    //   return pathname === "/home" ? !!auth : true;
    // },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    // async redirect(params) {
    //   console.log("*redirect", params);
    //   return params.url;
    // },
    async session({ session, token }) {
      return { expires: session.expires, user: { ...token } };
    },
    // async signIn(params) {
    //   console.log("*signIn", params);
    //   return true;
    // },
  },
  providers: [
    Credentials({
      async authorize(credentials, req) {
        //user lookup
        const userArr: TUser[] = await getUser(credentials?.email as string);
        const user: TUser = userArr[0];
        if (user) {
          const passwordMatch = await comparePassword(
            credentials?.password as string,
            user.password,
          );
          if (passwordMatch) {
            //saved in JWT
            console.log("*authorize", user);
            return {
              email: user.email,
              id: user?.id.toString(),
              name: user.name,
            };
          }
        }
        return null;
      },
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { maxAge: 60 * 60 * 3, updateAge: 60 * 60 * 1 },
  trustHost: true,
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
