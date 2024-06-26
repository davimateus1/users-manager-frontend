import { AxiosRequestConfig } from 'axios';
import { User, UserForm, UserStatus } from '~/types';

export type GetUsersParams = {
  config?: AxiosRequestConfig;
};

export type GetUsersReturn = {
  users: Array<User>;
  totalPages: number;
};

export type GetUserParams = {
  id: number;
};

export type ChangeStatusParams = {
  id: number;
  status: UserStatus;
};

export type UpdateUserParams = {
  id: number;
  data: UserForm;
};
