import { Role } from "../enums/Role";

export interface Person {
  name: string;
  description: { [question: string ]: string };
  image: string;
  role: Role;
}