export interface InitialStateType {
  ui: {};
  data: {};
  user: {};
}

type UnionKeys<T> = T extends T ? keyof T : never;
type StrictUnionHelper<T, TAll> = T extends any
  ? T & Partial<Record<Exclude<UnionKeys<TAll>, keyof T>, undefined>>
  : never;
type StrictUnion<T> = StrictUnionHelper<T, T>;

export type Action_Type = StrictUnion<
  // user actions
  | { type: 'LOG_USER'; payload: {} }

  // ui actions
  | { type: 'LOADING'; payload: {} }

  // data actions
  | { type: 'DATA_FETCH_1'; payload: {} }
>;
