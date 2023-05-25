import React, { useContext, ReactElement } from "react";
import { useState, useEffect } from "react";
import { BookDataBooksApiResponse, BookDataBooksResponse, BookDataProps } from "./models";
import Image from "next/image";
import fetch from "cross-fetch";

("use-client");

const BookData = ({isbn}: BookDataProps) => {
  const [bookData, setBookData] = useState<BookDataBooksResponse>();

  // isbn format should be "ISBN:0000000000"

  const url: string = `https://openlibrary.org/api/books?bibkeys=${isbn}&jscmd=data&format=json`;

  const retrieve = async () => {
    const res: Response = await fetch(url) as Response;
    const data: BookDataBooksApiResponse = await res.json();
    console.log(data);
    console.log(data[isbn])
    setBookData(data[isbn]);
  };

  useEffect(() => {
    retrieve();
  }, []);

  if (bookData === undefined) return null;
  //TODO: add tailwind styling to book details
  return (
    <>
      <article className="flex">
        <title>{bookData.title}</title>
        <p>{bookData.by_statement}</p>
        <Image
          src={bookData.cover.medium}
          alt="Book Cover Preview"
          className=""
          height="100"
          width="100"
        />
        <div className="">
          <p className="">Subjects:</p>
          {bookData.subjects.map((subject) => (
            <p>{subject.name}</p>
          ))}
        </div>
      </article>
    </>
  );
};

export { BookData };
