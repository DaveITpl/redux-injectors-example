import "./styles.css";
import { Books } from "./features/books/components/Books";

export default function App() {
  return (
    <div className="App">
      <h1>Redux injectors</h1>
      <h2>reducers & sagas</h2>
      <Books />
    </div>
  );
}
