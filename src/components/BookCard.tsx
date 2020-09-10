import React from "react";

interface BookCardProps {
  id: number;
  title: string;
  author: string;
  coverPath: string;
  altText: string;
  matches: number;
}

function BookCard(props: BookCardProps) {
  return (
    <div className="flex flex-col justify-center w-64 p-4 border-solid border-2 border-gray-600 rounded">
      <div className="text-2xl mx-auto">{props.title}</div>
      <div className="text-1xl mx-auto">{props.author}</div>
      <img className="object-none" src={props.coverPath} alt={props.altText} />
      <div className="text-1xl mx-auto italic">
        {props.matches} people want to read this book.
      </div>
    </div>
  );
}

export { BookCard };
