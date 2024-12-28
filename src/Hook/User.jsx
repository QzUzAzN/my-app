import React, { createContext, useEffect, useState } from "react";
import "./User.css";
import UserProfile from "./UserProfile";

const initialAddress = () => {
  // console.log("initialAddress");

  return {
    Nation: "Viet Nam",
    City: {
      street: "24 An Dương Vương, Ninh Chữ",
      house: "Vilage",
    },
  };
};

const getAddress = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        Nation: "USA",
        City: {
          street: "200, Wall street, LA",
          house: "Building",
        },
      });
    }, 3000);
  });
};

export const UserContext = createContext({
  address: {
    Nation: "USA",
    City: {
      street: "200, Wall street, LA",
      house: "Building",
    },
  },
  age: 100,
  firstName: "CC",
  changeAge: () => {},
});
function User() {
  const [firstName, setFirstName] = useState("Justin Uber");
  const [age, setAge] = useState(24);
  const [, forceRerender] = useState(0);
  const [address, setAddress] = useState(initialAddress);

  const changeAge = () => {
    setAge((prevAge) => prevAge + 1);
  };

  const reRender = () => forceRerender((prevState) => prevState + 1);

  // console.log("re-render");

  const changeStreet = () => {
    // address.City = "Hanoi";
    setAddress((prevAddress) => {
      const newCity = { ...prevAddress.City };
      newCity.street = "22 An Dương Vương, Ninh Chữ";
      return {
        ...prevAddress,
        City: newCity,
      };
    });
  };

  // giống componentDidUpdate, effect function chạy lại
  // mỗi khi component re-render
  // useEffect(() => {
  //   console.log(document.getElementsByTagName("li"));
  //   console.log("useEffect giống componentDidupdate");
  // });

  // Thường dùng để gọi API
  useEffect(() => {
    // console.log("useEffect giống componentDidupdate");
    getAddress().then((res) => {
      const newAddress = { ...address };
      newAddress.City = res.City;
      setAddress(newAddress);
    });
  }, [address]);

  return (
    <div className="container">
      <h1>User Function Component</h1>
      <UserContext.Provider value={{ address, age, firstName, changeAge }}>
        <UserProfile />
      </UserContext.Provider>
      <button onClick={reRender}>Re render</button>
      <button onClick={changeStreet}>Change street</button>
    </div>
  );
}

export default User;
