import bcrypt from "bcrypt";

export const encryptPassword = async (
  text: string,
  saltRounds: number | string,
) => bcrypt.hash(text, saltRounds);

export const comparePassword = async (
  data: Buffer | string,
  encrypted: string,
) => bcrypt.compare(data, encrypted);
