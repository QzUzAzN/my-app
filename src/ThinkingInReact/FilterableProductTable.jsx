import React, { Component } from "react";
import "./FilterableProductTable.css";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import styled from "styled-components";

const productListMock = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

const fetchApi = () => Promise.resolve(productListMock);

const Container = styled.div`
  max-width: 1500px;
  width: 5rem;
  margin: auto;
  padding: 1rem;
`;

const StyledButtons = styled(Buttons)`
  border: solid 1px black;
  margin-bottom: 2rem;
  border-radius: 5px;
  background-color: darkorchid;
  color: aliceblue;
  z-index: 10;
`;

function Buttons({ className }) {
  return (
    <div className={className}>
      <button>Hello</button>
    </div>
  );
}
export class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
      searchText: "",
      inStock: false,
    };
  }

  componentDidMount() {
    fetchApi().then((res) => {
      this.setState({
        productList: res,
      });
    });
  }

  handleChange = (event) => {
    const name = event.target.name;
    console.log(name);
    if (name === "product") {
      this.setState({
        searchText: event.target.value,
      });
    } else if (name === "stock") {
      this.setState({
        inStock: event.target.checked,
      });
    }
  };

  render() {
    const { productList, searchText, inStock } = this.state;
    return (
      <>
        <Container>
          <StyledButtons />
        </Container>
        <div className="FilterableProductTable">
          <SearchBar
            searchText={searchText}
            inStock={inStock}
            handleChange={this.handleChange}
          />
          <ProductTable
            searchText={searchText}
            inStock={inStock}
            productList={productList}
          />
        </div>
      </>
    );
  }
}

export default FilterableProductTable;
