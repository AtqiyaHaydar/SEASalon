// "use server"

// import bcrypt from 'bcryptjs';

// export async function saltAndHashPassword(password: string): Promise<string> {
//   if (typeof password !== "string") {
//     throw new Error("Password must be a string");
//   }

//   const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(password, salt);
//   return hashedPassword;
// }

// export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
//   if (typeof password !== "string" || typeof hashedPassword !== "string") {
//     throw new Error("Both password and hashed password must be strings");
//   }

//   const isMatch = await bcrypt.compare(password, hashedPassword);
//   return isMatch;
// }