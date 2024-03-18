
function App() {
    return (
      <div>
        <h1>Hello, sup!</h1>
        <MyButton />
        <IsBiggerThan10 />
        <Mailbox msgs={["Hi", "Welcome", "who dis", "tyfty"]} />
        <PokemonList />
        <Counter />
        <Counter />
        <CounterThree />
        <MyApp />
      </div>
    );
  }

  function MyButton() {
    const buttonText = "Am a button";
    function handleClick() {
      alert("AAAAAAAAAA!!!");
    }
    return <button onClick={handleClick}>{buttonText}</button>;
  }
  function MyButtonToShare({ count, onClick }) {
    return <button onClick={onClick}>{count}</button>;
  }

  function IsBiggerThan10(number) {
    number = 5;
    return number > 10 ? <h1>Is big!</h1> : <h1>Is smol</h1>;
  }
  function Mailbox({ msgs }) {
    return (
      <div>
        {msgs.length > 0 && <h1>{msgs.length} unread messages </h1>}
      </div>
    );
  }
  function PokemonList() {
    const pokemon = ["Bulbasaur", "Squirtle", "Charmander"];
    const listItems = pokemon.map((p) => <li>{p}</li>);
    return <ul>{listItems}</ul>;
  }
  function Counter() {
    const [count, setCount] = React.useState(5);
    return (
      <>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}> Increment </button>
      </>
    );
  }
  function CounterThree() {
    const [number, setNumber] = React.useState(0);
    return (
      <>
        <h1>{number}</h1>
        <button
          onClick={() => {
            setNumber(number + 1);
            setNumber(number + 1);
            setNumber(number + 1);
          }}
        >
          {" "}
          +3{" "}
        </button>
      </>
    );
  }
  function MyApp() {
    let [count, setCount] = React.useState(0);
    const handleCount = () => setCount(count + 1);

    return (
      <>
        <div>
          <MyButtonToShare count={count} onClick={handleCount} />
          <MyButtonToShare count={count} onClick={handleCount} />
        </div>
      </>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);