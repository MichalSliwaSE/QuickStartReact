function App() {
  const user = { name: "Joel", age: 54 };
  return <h1>Hi {user.name}!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
