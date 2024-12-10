import { useState } from "react";
import "./App.css";
import Clock from "./Clock";
import BareInput from "./BareInput";
import Layout from "./Layout";
import BareButton from "./BareButton";
import LoginControl from "./LoginControl";
import CorrectlyState from "./CorrectlyState";
import ProductList from "./ProductList/ProductList";
import Form from "./Form/Form";
import UncontrolledComponent from "./Form/UncontrolledComponent";
import Calculator from "./Calculator/Calculator";
import Inheritance from "./CompositionvsInheritance/Inheritance";
import Composition from "./CompositionvsInheritance/Composition";
import FilterableProductTable from "./ThinkingInReact/FilterableProductTable";

function App() {
  // const [name, setName] = useState("Casio");
  return (
    <div>
      {/* <button onClick={() => setName("Rolex")}>Change</button>
      <Clock name={name} /> */}
      {/* <Layout>
        <h1>Hello</h1>
        <BareInput type="password" value="100" autoFocus onChange={() => {}} />
        <BareButton />
      </Layout> */}

      {/* <LoginControl isLoggedIn={false} /> */}
      {/* <CorrectlyState /> */}
      {/* <ProductList /> */}
      {/* <Form /> */}
      {/* <UncontrolledComponent /> */}
      {/* <Calculator /> */}
      {/* <Inheritance /> */}
      {/* <Composition /> */}
      <FilterableProductTable />
    </div>
  );
}

export default App;
