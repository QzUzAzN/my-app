import React, { useContext } from "react";
import { UserContext } from "./User";

export default function Profile() {
  const { firstName, age, address } = useContext(UserContext);
  console.log(firstName);
  console.log(age);
  console.log(address);

  return (
    <div>
      <ul>
        <li>FirstName: {firstName}</li>
        <li>Age: {age}</li>
        <li>Nation: {address.Nation}</li>
        <li>Street: {address.City.street}</li>
        <li>House: {address.City.house}</li>
      </ul>
    </div>
  );
}
