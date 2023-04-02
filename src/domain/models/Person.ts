import { Role } from "../enums/Role";

export interface Person {
  name: string;
  description: string;
  image: string;
  role: Role;
}