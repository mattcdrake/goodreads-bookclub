import React from "react";

import { Book } from "../types/Book";

interface BookCardProps {
  book: Book;
  matchCount: number;
}

function BookCard(props: BookCardProps) {
  return (
    <div className="flex flex-col justify-center w-64 p-4">
      <div className="text-2xl mx-auto">{props.book.title}</div>
      <div className="text-1xl mx-auto">{props.book.author}</div>
      <img
        className="object-none"
        src={
          "http://covers.openlibrary.org/b/isbn/" + props.book.isbn13 + "-M.jpg"
        }
        alt={props.book.title}
      />
      <div className="text-1xl mx-auto italic">
        {props.matchCount} people want to read this book.
      </div>
    </div>
  );
}

export { BookCard };
