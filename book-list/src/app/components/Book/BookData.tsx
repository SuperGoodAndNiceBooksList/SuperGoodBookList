import React, { useContext, ReactElement } from "react";
import { useState, useEffect } from "react";
import { BookDataBooksApiResponse, BookDataBooksResponse, BookDataProps } from "./models";
import Image from "next/image";
import Link from "next/link";
import fetch from "cross-fetch";

("use-client");

const BookData = ({bibkey, crop}: BookDataProps) => {
  const [bookData, setBookData] = useState<BookDataBooksResponse>();
  const [loading, setLoading] = useState(true);
  const subjectsLimit = 10;

  // isbn format should be "ISBN:#########" ex: ISBN:9780980200447
  // olid should be "OLID:OL######"" ex: OLID:OL22853304M

  const url: string = `https://openlibrary.org/api/books?bibkeys=${bibkey}&jscmd=data&format=json`;
  const retrieve = async () => {
    const res: Response = await fetch(url) as Response;
    const data: BookDataBooksApiResponse = await res.json();
    console.log("bookdata is: ", data);
    console.log(data[bibkey])
    setBookData(data[bibkey]);
    setLoading(false);
  };

  useEffect(() => {
    retrieve();
  }, []);

  const Title = ():ReactElement => {
    if(loading){
      return (<title>"Loading..."</title>);
    }
    return (<>
      <h3>{bookData?.title}</h3>
      <p>{bookData?.by_statement}</p>
      {console.log(bookData?.title)}
      </>);
  }
  const showDetails = () => {
    if (!crop) {
      return (
        <div className="">
        <p className="">Subjects:</p>
        { bookData?.subjects.splice(0,subjectsLimit).map((subject,i) => (
          <ul>
            <li key={i}>{subject.name}</li>
          </ul>
        ))}
        </div>
      );
    }
  };

  if (bookData === undefined) return null;
  //TODO: add tailwind styling to book details
  return (
    <>
      <article className="flex">
        <Link href={"/book/"+bookData.key.substring(6)} >
          <Title/>
          <Image
            src={loading ? "/loading.gif" : bookData.cover.medium}
            alt="Book Cover Preview"
            priority={true}
            placeholder={blur}
            className=""
            height="100"
            width="100"
          />
        </Link>
       { showDetails() }
      </article>
    </>
  );
};

export { BookData };
