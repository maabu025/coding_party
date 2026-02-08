import { useState } from "react";


const Counter = (): JSX.Element => {
const [count, setCount] = useState<number>(0);
const [text, setText] = useState<string>("");


const handleClick = (
e: React.MouseEvent<HTMLButtonElement>
): void => {
setCount((prev) => prev + 1);
};


const handleChange = (
e: React.ChangeEvent<HTMLInputElement>
): void => {
setText(e.target.value);
};


const handleSubmit = (
e: React.FormEvent<HTMLFormElement>
): void => {
e.preventDefault();
alert(`Submitted: ${text}`);
};


return (
<section>
<h3>Counter Example</h3>
<p>Count: {count}</p>
<button onClick={handleClick}>Increment</button>


<form onSubmit={handleSubmit}>
<input value={text} onChange={handleChange} />
<button type="submit">Submit</button>
</form>
</section>
);
};


export default Counter;