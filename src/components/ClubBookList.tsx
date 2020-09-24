import React from "react";

import { Book } from "../types/Book";

import { BookCard } from "./BookCard";

interface ClubBookListProps {
  books: Book[];
  pageNumber: number;
}

function ClubBookList(props: ClubBookListProps) {
  // Convert from 1-indexing to 0-indexing to work with the array.
  let bookListStartPos = (props.pageNumber - 1) * 6;
  let bookSubList = props.books.slice(bookListStartPos, bookListStartPos + 6);

  return (
    <ul className={"grid grid-cols-3 grid-rows-2 gap-2"}>
      {bookSubList.map((book) => {
        return (
          <li key={book.title} className="w-64">
            <BookCard
              book={book}
              matchCount={Math.floor(Math.random() * 15) + 1}
            />
          </li>
        );
      })}
    </ul>
  );
}

export { ClubBookList };
