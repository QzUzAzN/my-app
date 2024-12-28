import React, { useEffect, useState } from "react";

export default function RuleOfHook() {
  // 1. Sử dụng state tên name
  const [name, setName] = useState("Mary");

  // 2. Sử dụng một effect lưu giá trị trên form
  useEffect(function persistForm() {
    localStorage.setItem("formData", name);
  });

  // 3. Sử dụng state tên surname
  const [surname, setSurname] = useState("Poppins");

  // 4. Sử dụng 1 effect cập nhập title
  useEffect(function updateTitle() {
    document.title = name + " " + surname;
  });
  return (
    <div>
      <button onClick={() => setName("")}>Change Name</button>
    </div>
  );
}
