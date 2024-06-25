import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
// import { saltAndHashPassword } from "@/utils/password"
import { getUserByEmail } from "./actions/auth-actions"
import { signInSchema } from "./lib/schema"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        let user = null

        const { email, password } = await signInSchema.parseAsync(credentials)
 
        user = await getUserByEmail(email, password)
 
        if (!user) {
          throw new Error("User not found.")
        }
 
        return user
      },
    }),
  ],
})