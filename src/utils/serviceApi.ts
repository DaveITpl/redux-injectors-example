import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

type ApiMethodWithoutPayload<S = any> = () => Promise<AxiosResponse<S>>;

type ApiMethodWithPayload<T, S = any> = (
  action: PayloadAction<T>
) => Promise<AxiosResponse<S>>;

export type ApiMethod<T extends unknown | undefined = undefined, S = any> = [
  T
] extends [undefined]
  ? ApiMethodWithoutPayload<S>
  : ApiMethodWithPayload<T, S>;

export type ApiRequest<T> = T extends ApiMethod<infer A, infer B> ? A : never;
export type ApiResponse<T> = T extends ApiMethod<infer A, infer B> ? B : never;

export type ApiPayloads<T> = T extends Record<
  string,
  ApiMethod<infer A, infer B>
>
  ? { [K in keyof T]: PayloadAction<ApiRequest<T[K]>> }
  : never;

export type ApiPayloadsResponses<T> = T extends Record<
  string,
  ApiMethod<infer A, infer B>
>
  ? { [K in keyof T]: PayloadAction<ApiResponse<T[K]>> }
  : never;

export type ApiRequests<T> = T extends Record<
  string,
  ApiMethod<infer A, infer B>
>
  ? { [K in keyof T]: ApiRequest<T[K]> }
  : never;

export type ApiResponses<T> = T extends Record<
  string,
  ApiMethod<infer A, infer B>
>
  ? { [K in keyof T]: { data: ApiResponse<T[K]> } }
  : never;

export type ApiResponsesData<T> = T extends Record<
  string,
  ApiMethod<infer A, infer B>
>
  ? { [K in keyof T]: ApiResponse<T[K]> }
  : never;

export type ApiService<T> = T extends Record<
  string,
  ApiMethod<infer A, infer B>
>
  ? {
      methods: T;
      payloads: ApiPayloads<T>;
      payloadsResponses: ApiPayloadsResponses<T>;
      requests: ApiRequests<T>;
      responses: ApiResponses<T>;
      responsesData: ApiResponsesData<T>;
    }
  : never;
