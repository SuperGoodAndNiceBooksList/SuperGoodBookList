import React, { useContext, ReactElement } from "react";
import { useState, useEffect } from "react";
import { BookDataBooksApiResponse, BookDataBooksResponse, BookDataProps } from "./models";
import Image from "next/image";
import Link from "next/link";
import fetch from "cross-fetch";

("use-client");

const BookData = ({bibkey, crop, subjectsLimit}: BookDataProps) => {
  const [bookData, setBookData] = useState<BookDataBooksResponse>();
  const [loading, setLoading] = useState(true);

  // isbn format should be "ISBN:#########" ex: ISBN:9780980200447
  // olid should be "OLID:OL######"" ex: OLID:OL22853304M

  const url: string = `https://openlibrary.org/api/books?bibkeys=${bibkey}&jscmd=data&format=json`;
  const retrieve = async () => {
    const res: Response = await fetch(url) as Response;
    const data: BookDataBooksApiResponse = await res.json();
    console.log("bookdata is: ", data);
    console.log("bibkey is: ", data[bibkey])
    setBookData(data[bibkey]);
    setLoading(false);
  };

  useEffect(() => {
    retrieve();
  }, []);

  const Title = ():ReactElement => {
    if(loading){
      return (<h3>"Loading..."</h3>);
    }
    return (<>
      <h3>{bookData?.title}</h3>
      <p>{bookData?.by_statement}</p>
      </>);
  }
  //todo: add links to each subject for a genre page
  const showDetails = () => {
    let subjects = bookData?.subjects; 
    if (subjectsLimit) {
      subjects = bookData?.subjects.splice(0,subjectsLimit);
    };
    if (!crop && subjects) {
      return (
        <div className="">
          <h4 className="">Subjects:</h4>
          <ul>
            {subjects.map((subject,i) => (
              <li key={i}>{subject.name}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  const BookCover = () => {
    let imageProps = {
      imageSrc: "/loading.gif",
      height: 150,
      width: 100,
    }
    
    if (!loading && crop && bookData) {
      imageProps.imageSrc = bookData.cover.medium
    }
    
    if (!loading && !crop && bookData) {
      imageProps.imageSrc = bookData?.cover.large
      imageProps.height = 800
      imageProps.width = 500
    }
    
    return(
      <Image
        src={imageProps.imageSrc}
        alt="Book Cover Preview"
        priority={true}
        className=""
        height={imageProps.height}
        width={imageProps.width}
      />
    );
  }

  if (bookData === undefined) return null;
  //TODO: add tailwind styling to book details
  return (
    <>
      <article className="flex">
        <Link href={"/book"+bookData?.key.substring(6)} >
          <Title/>
          <BookCover />
        </Link>
       { showDetails() }
      </article>
    </>
  );
};

export { BookData };
