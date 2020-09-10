import React from "react";

import { Book } from "../types/Book";

import { BookCard } from "./BookCard";

interface BookListProps {
  books: Book[];
}

function BookList(props: BookListProps) {
  return (
    <ul className="grid grid-cols-3 grid-rows-2 gap-2">
      {props.books.map((book) => {
        return (
          <li key={book.title} className="w-64 shadow">
            <BookCard
              id={book.id}
              title={book.title}
              author={book.author}
              coverPath={book.coverPath}
              altText={book.altText}
              matches={Math.floor(Math.random() * 15) + 1}
            />
          </li>
        );
      })}
    </ul>
  );
}

export { BookList };
