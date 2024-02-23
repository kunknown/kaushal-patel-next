// import { kv } from "@vercel/kv";
// import CredentialsProvider from "next-auth/providers/credentials";
// import NextAuth, { NextAuthOptions, User } from "next-auth";

// export const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       authorize: async (credentials, req) => {
//         // look up user
//         kv.hgetall("kp@kp.com");
//         const user: User = {
//           email: "kp@kp.com",
//           id: "123",
//           name: "kp",
//         };
//         if (user) {
//           //saved in JWT
//           return user;
//         } else {
//           // error thrown advising user to check their details
//           return null;
//           // reject this callback with Error -> user will be sent to error page
//         }
//       },
//       credentials: {
//         email: { label: "Email", placeholder: "kp@kp.com", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       name: "Credentials",
//     }),
//   ],
// };

// export default NextAuth(authOptions);
