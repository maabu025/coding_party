import MyComponent from "./components/MyComponent";
import Counter from "./components/Counter";


function App(): JSX.Element {
return (
<main>
<h1>React + TypeScript Guided Project</h1>
<MyComponent name="Mariam" age={21} isStudent />
<Counter />
</main>
);
}


export default App;