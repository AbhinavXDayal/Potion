import useFetch from "./components/Fetch";
import Id from "./components/Id";

const App = () => {
  const [Data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>
      <h2>Fetch</h2>

      {Data &&
        Data.map((Item) => (
          <p key={Item.id}>{Item.title}</p>
        ))}

      <hr />

      <h2>Id</h2>

      <Id />

      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.</p>

      <Id />
    </div>
  );
};

export default App;