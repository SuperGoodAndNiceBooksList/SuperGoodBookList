import React, { useContext, ReactElement } from "react";
import { useState, useEffect } from "react";
import { BookDataSearchProps, BookDataSearchApiResponse, BookDataSearchResponse } from "./models";
import { BookData } from "./BookData";
import fetch from "cross-fetch";

("use-client");

const BookList = ({search}: BookDataSearchProps) => {
    const [works, setWorks] = useState<BookDataSearchResponse[]>();
    const query = (search.includes(" ")) ? search.split(" ").join("+") : search;
    const url: string = `https://openlibrary.org/search.json?q=${query}&limit=10`;

    const retrieve = async () => {
        const res: Response = await fetch(url) as Response;
        const data: BookDataSearchApiResponse = await res.json();
        setWorks(data?.docs);
      };
    
      useEffect(() => {
        retrieve();
      }, []);
    
      if (works === undefined) return null;

      return (
        <>
        {works.map((book, idx) => {
            const olid = book?.seed[0]?.split("/")[2];
            return (olid) ? <BookData key={idx} bibkey={"OLID:" + olid} crop={true}/> : null;
        })}
        </>
      );

}

export { BookList };