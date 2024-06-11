export type TMyPagination<T> = {
  page?: number;
  limit?: number;
} & T;

export type TApiResponse<T = any> = {
  data: T;
  message?: string[] | string;
  statusCode?: number;
};
export type TErrorResponse = {
  message?: string[] | string;
  statusCode?: number;
};

export type TField<T = any> = {
  id: string;

  createdBy: string;

  updatedBy: string;

  createdAt: string;

  updatedAt: string;

  deletedAt: string;
} & T;
