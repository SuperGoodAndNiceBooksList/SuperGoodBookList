import React, { useContext, ReactElement } from "react";
import { useState, useEffect } from "react";
import { BookDataBooksApiResponse, BookDataBooksResponse } from "./models";
import Image from "next/image";

const BookData = (isbn: string) => {
  const [bookData, setBookData] = useState<BookDataBooksResponse>();

  // isbn format should be "ISBN:0000000000"

  const url: string = `https://openlibrary.org/api/books?bibkeys=${isbn}&jscmd=data&format=json`;

  const retrieve = async () => {
    const res = await fetch(url);
    const data: BookDataBooksApiResponse = await res.json();
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
        <title>{bookData.details.title}</title>
        <Image
          src={bookData.thumbnail_url}
          alt="Book Cover Preview"
          className=""
        />
        <desc>{bookData.details.description}</desc>
        <div className="">
          <p className="">Subjects:</p>
          {bookData.details.subjects.map((subject, idx) => (
            <p>{subject}</p>
          ))}
        </div>
      </article>
    </>
  );
};

export default BookData;
