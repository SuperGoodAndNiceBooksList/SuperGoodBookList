import React, { useContext, ReactElement } from "react";
import { useState, useEffect } from "react";
import { BookDataBooksApiResponse, BookDataBooksResponse, BookDataProps } from "./models";
import Image from "next/image";

("use-client");

const BookData = ({bibkey}: BookDataProps) => {
  const [bookData, setBookData] = useState<BookDataBooksResponse>();

  // isbn format should be "ISBN:#########" ex: ISBN:9780980200447
  // olid should be "OLID:OL######"" ex: OLID:OL22853304M

  const url: string = `https://openlibrary.org/api/books?bibkeys=${bibkey}&jscmd=data&format=json`;

  const retrieve = async () => {
    const res: Response = await fetch(url) as Response;
    const data: BookDataBooksApiResponse = await res.json();
    console.log(data);
    console.log(data[bibkey])
    setBookData(data[bibkey]);
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
