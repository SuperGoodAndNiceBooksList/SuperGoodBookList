'client-side'
import React, { useContext, ReactElement } from "react";
import { useState, useEffect } from "react";
import { 
  BookDataSearchProps,
  BookDataSearchApiResponse,
  BookDataSearchResponse,
  searchTypes 
} from "./models";
import { BookData } from "./BookData";
import fetch from "cross-fetch";
import "../../globals.css";
import { useSearchParams } from "next/navigation";
import { OptionContext } from "@/context/Context";

("use-client");

const BookList = ({search}: BookDataSearchProps) => {
    const [option] = useContext(OptionContext);
    const [loading, setLoading] = useState(true);
    const [works, setWorks] = useState<BookDataSearchResponse[]>();
    const urls = {
      Title: {
        query: "search.json?q=",
        method: "encode"
      },
      Genre:{
        query: "search.json?q=",
        method: "encode"
      },
      Author: {
        //query:  "search/authors.json?q=",
        query: "search.json?q=",
        method: "encode"
      },
      Default:{
        query:"search.json?q=",
        method:"encode",
      },
    }
    const getSearchType = () => {
      if(option?.selection && search){
        const query = urls[option.selection].method === "concat" ? search?.split(" ").join("+") : encodeURI(search);
        return `${urls[option.selection].query}${query}&limit=50&random`;
      }
      const query = search ? encodeURI(search) : "";
      return `${urls.Default.query}${encodeURI(query)}&limit=50&random`;
    }

    const retrieve = async () => {  
      if (search){
          // const query = (search.includes(" ")) ? search.split(" ").join("+") : search;
          // const query = encodeURI(search);
          setLoading(true);
          const url: string = `https://openlibrary.org/${getSearchType()}`;
          const res: Response = await fetch(url) as Response;
          const data: BookDataSearchApiResponse = await res.json();
          setWorks(data?.docs);
        } else {
          setWorks([]);
        }
        setLoading(false);
      };
    
      useEffect(() => {
        retrieve();
      }, [search]);

      const renderBooks = () => {
       if(works) {
        return works.map((book, idx) => {
          const olid = book?.seed[0]?.split("/")[2];
          return (olid) ? <BookData key={idx} bibkey={"OLID:" + olid} crop={true}/> : null;
        })
       }
      }
      const renderFailedSearch = () => {
        if(!works && !loading){
          return <h3>we couldn't find what you were looking for</h3>
        }
      }


      return (
        <>
        {renderFailedSearch()}
        <div className="grid grid-cols-6 gap-5">
          {renderBooks()}
        </div>
        </>
      );

}

export { BookList };