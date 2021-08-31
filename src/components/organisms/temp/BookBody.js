import React from "react";
import { data } from "../../../booksData";
import BookCard from "../../molecules/Card/BookCard";

const BookBody = () => {


  return (
    <>
      {data.map((data) => {
        return (
          <BookCard
            author={data.author}
            name={data.name}
            readingTime={data.readingTime}
            totalReads={data.totalReads}
            url={data.url}
          />
        );
      })}
    </>
  );
};

export default BookBody;
