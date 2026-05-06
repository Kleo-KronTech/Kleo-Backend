import { userRoleEnum } from '../database/schema/users';

const userRoleValues = [...userRoleEnum.enumValues] as const;
export type UserRole = (typeof userRoleValues)[number];
