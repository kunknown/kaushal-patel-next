import bcrypt from "bcrypt";

export const encryptPassword = async (
  text: string,
  saltRounds: number | string,
) => await bcrypt.hash(text, saltRounds);

export const comparePassword = async (
  data: Buffer | string,
  encrypted: string,
) => await bcrypt.compare(data, encrypted);
