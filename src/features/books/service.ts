import apiClient from "../../api/apiClient";
import { ApiMethod, ApiService } from "../../utils/serviceApi";
import { Book } from "./types";

type GetBooksResponse = {
  items: Book[];
};

type BookMethods = {
  getBooks: ApiMethod<string, GetBooksResponse>;
};

export type BookService = ApiService<BookMethods>;

export const bookService: BookService["methods"] = {
  getBooks: ({ payload }) => apiClient.get(`/?${payload}`)
};
