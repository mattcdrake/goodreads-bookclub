import React from "react";

import { ReportBook } from "../types/ReportBook";

import { BookCard } from "./BookCard";

interface ClubBookListProps {
  reportBooks: ReportBook[];
  pageNumber: number;
}

function ClubBookList(props: ClubBookListProps) {
  // Convert from 1-indexing to 0-indexing to work with the array.
  let bookListStartPos = (props.pageNumber - 1) * 6;
  let bookSubList = props.reportBooks.slice(
    bookListStartPos,
    bookListStartPos + 6
  );

  return (
    <ul className="grid grid-cols-3 grid-rows-2 gap-2">
      {bookSubList.map((reportBook) => {
        return (
          <li key={reportBook.book.title} className="w-64">
            <BookCard book={reportBook.book} matchCount={reportBook.matches} />
          </li>
        );
      })}
    </ul>
  );
}

export { ClubBookList };
