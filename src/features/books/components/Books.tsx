import { useBookManager } from "../manager";
import { Loader } from "../../../shared/Loader";
import { useEffectOnce } from "react-use";

export const Books = () => {
  const {
    state: { books },
    actions: { fetchBooks }
  } = useBookManager();

  useEffectOnce(() => {
    fetchBooks("maxResults=40");
  });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <h3>Books:</h3>
      </div>
      <Loader isLoading={books.isLoading}>
        <ul style={{ listStyleType: "decimal", textAlign: "left" }}>
          {books.items?.map((book) => (
            <li key={book.id}>{book.volumeInfo.title}</li>
          ))}
        </ul>
      </Loader>
    </div>
  );
};
