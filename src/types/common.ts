export type Nullable<T> = T | null | undefined;

export type MongoDB<T> = {
  _id: string;
} & T;
