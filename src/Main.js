import initState from "./values";
import { useState } from "react";

function Main() {
  const arr=initState.books;
  console.log(arr);
    const [title,setTitle]=useState(arr.map((books)=>books.title));
    const [auther,setAuther]=useState(arr.map((books)=>books.auther));
  return (
    <>
     {arr.map((book, index) => (
        <div key={index} className="p-4 bg-gray-200 m-2 rounded shadow-md">
          <h3 className="text-xl font-bold">Title: {book.title}</h3>
          <p className="text-gray-700">Author: {book.author}</p>
        </div>
      ))}
    </>
  );
}

export default Main;
