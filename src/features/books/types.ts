export type Author = string;

export type VolumeInfo = {
  title: string;
  subtitle: string;
  authors: Author[];
  publisher: string;
  publisherDate: string;
  description: string;
  // etc...
};

export type Book = {
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
};

export type BookState = {
  books: { items: Book[]; isLoading: boolean };
};
