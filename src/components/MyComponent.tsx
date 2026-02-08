import React from "react";
import InnerComponent from "./InnerComponent";
import styles from "./MyComponent.module.css";


interface MyComponentProps {
name: string;
age?: number;
isStudent?: boolean;
}


const MyComponent = ({
name,
age = 18,
isStudent = false,
}: MyComponentProps): JSX.Element => {
const boxStyle: React.CSSProperties = {
padding: "1rem",
border: "1px solid #ccc",
};


return (
<section className={styles.wrapper} style={boxStyle}>
<h2>Hello, {name}</h2>
<p>Age: {age}</p>
<p>Status: {isStudent ? "Student" : "Not a student"}</p>
<InnerComponent />
</section>
);
};


export default MyComponent;