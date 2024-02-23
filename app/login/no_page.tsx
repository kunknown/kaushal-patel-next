// "use client";

// import React from "react";
// import { submitLoginData, createNewUser } from "./actions";

// export default function Page() {
//   return (
//     <>
//       <form name="login-form" action={submitLoginData}>
//         <label htmlFor="email">Email</label>
//         <input id="email" name="email" type="email" required />
//         <label htmlFor="current-password">Password</label>
//         <input
//           id="current-password"
//           name="current-password"
//           type="password"
//           required
//         />
//         <label>
//           Login <input type="submit" hidden />
//         </label>
//       </form>
//       <form name="signup-form" action={createNewUser}>
//         <label htmlFor="signup-fullname">Full Name</label>
//         <input id="signup-fullname" name="fullname" type="text" required />
//         <label htmlFor="signup-email">Email</label>
//         <input id="signup-email" name="email" type="email" required />
//         <label htmlFor="signup-current-password">Password</label>
//         <input
//           id="signup-current-password"
//           name="current-password"
//           type="password"
//           required
//         />
//         <label>
//           Signup <input type="submit" hidden />
//         </label>
//       </form>
//     </>
//   );
// }
