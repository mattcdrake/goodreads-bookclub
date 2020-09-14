import React from "react";

import { Book } from "../types/Book";

import { BookCard } from "./BookCard";

interface ClubBookListProps {
  books: Book[];
  pageLength: number;
  pageNumber: number;
}

function ClubBookList(props: ClubBookListProps) {
  let bookListStartPos = props.pageNumber * props.pageLength;
  let bookSubList = props.books.slice(
    bookListStartPos,
    bookListStartPos + props.pageLength
  );

  return (
    <ul
      className={
        "grid grid-cols-3 grid-rows-" +
        Math.max(1, Math.floor(props.pageLength / 3)) +
        " gap-2"
      }
    >
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
