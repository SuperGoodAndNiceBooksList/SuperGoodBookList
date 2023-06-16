import React, { useContext, ReactElement } from "react";
import { useState, useEffect } from "react";
import {
  BookDataBooksApiResponse,
  BookDataBooksResponse,
  BookDataProps,
} from "./models";
import Image from "next/image";
import Link from "next/link";
import fetch from "cross-fetch";
import "../../globals.css";
import { FavoritesContext } from "@/context/Context";
import { versions } from "process";

("use-client");


const BookData = ({ bibkey, crop, subjectsLimit, preFetchedData, filteredList }: BookDataProps) => {
  const [bookData, setBookData] = useState<BookDataBooksResponse>();
  const [favorites, setFavorites] = useContext(FavoritesContext);

  // isbn format should be "ISBN:#########" ex: ISBN:9780980200447
  // olid should be "OLID:OL######"" ex: OLID:OL22853304M

  const url: string = `https://openlibrary.org/api/books?bibkeys=${bibkey}&jscmd=data&format=json`;
  const retrieve = async () => {
    if (!preFetchedData){
      const res: Response = (await fetch(url)) as Response;
      const data: BookDataBooksApiResponse = await res.json();
      // console.log("bookdata is: ", data);
      // console.log("bibkey is: ", data[bibkey])
      setBookData(data[bibkey]);
    } else{
      setBookData(preFetchedData);
    }
  };

  useEffect(() => {
    retrieve();
}, [favorites?.list, favorites?.filterTerm, filteredList]);
  
const favoritesHasBook = (bookData: BookDataBooksResponse | undefined) => {
    let result = false;

    if(!favorites || !favorites.list || !bookData){
      return result;
    }

      favorites.list.map((favorite) => {
        if(favorite.key === bookData.key){
          return true;
        };
      });
    return result;
  }
  const filterFavorites = (bookData: BookDataBooksResponse | undefined) => {
    if(!favorites || !favorites.list || !bookData){
      return;
    }
    let copyFavoritesList = favorites.list;
    console.log("copy fav is",copyFavoritesList);
    copyFavoritesList = copyFavoritesList.filter((favorite) => {return favorite.key !== bookData.key});
    console.log("copy fav is now",copyFavoritesList)
    setFavorites({...favorites, list:[...copyFavoritesList]});
  }

  const addToFavorites = (bookData: BookDataBooksResponse | undefined) => {
    if(!bookData){
      return;
    }
    if(!favorites || !favorites.list){
      setFavorites({list:[bookData]});
      return;
    }
    if (!favoritesHasBook(bookData)) {
      setFavorites({...favorites, list:[...favorites.list, bookData]});
    } 
  };

  const removeFromFavorites = (bookData: BookDataBooksResponse | undefined) => {
    if (favoritesHasBook(bookData)) {
      filterFavorites(bookData);
    }
  };



  const FavoritesButton = (bookData: BookDataBooksResponse | undefined) => {
    
    const inFavorites = favoritesHasBook(bookData);
    return(
      <Button>
        {}
      </Button>
    );
  }

  const Title = (): ReactElement => {
    return (
      <div className="flex flex-col justify-center">
        <h3>{bookData?.title}</h3>
        <p>{bookData?.by_statement}</p>
      </div>
    );
  };
  //todo: add links to each subject for a genre page
  const showDetails = () => {
    let subjects = bookData?.subjects;
    if (subjectsLimit) {
      subjects = bookData?.subjects?.splice(0, subjectsLimit);
    }
    if (!crop && subjects) {
      return (
        <div className="border-1 p-2">
          <h4 className="">Subjects:</h4>
          <ul>
            {subjects.map((subject, i) => (
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
      height: 100,
      width: 100,
    };

    if (bookData) {
      //temp fix for books without covers
      imageProps.imageSrc = crop
        ? bookData.cover?.medium
        : bookData.cover?.large;
      imageProps.height = crop ? 150 : 800;
      imageProps.width = crop ? imageProps.width : 500;
    }

    return (
      <Image
        src={imageProps.imageSrc ? imageProps.imageSrc : "/placeHolder.jpg"}
        alt="Book Cover Preview"
        priority={true}
        className=""
        blurDataURL="/loading.gif"
        placeholder="blur"
        height={imageProps.height}
        width={imageProps.width}
      />
    );
  };

  const TitleAndCover = () => {
    if (!crop) {
      return (
        <>
          <Title />
          <BookCover />
          <button
            onClick={() => {
              addToFavorites(bookData);
            }}
          >
            Add to favorites
          </button>
          <button
            onClick={() => {
              removeFromFavorites(bookData);
            }}
          >
            Remove from favorites
          </button>
        </>
      );
    } else {
      return (
        <>
          <Link href={"/book" + bookData?.key.substring(6)}>
            <Title />
            <BookCover />
          </Link>
          <button
            onClick={() => {
              addToFavorites(bookData);
            }}
          >
            Add to favorites
          </button>
          <button
            onClick={() => {
              removeFromFavorites(bookData);
            }}
          >
            Remove from favorites
          </button>
        </>
      );
    }
  };

  if (bookData === undefined) return null;
  //TODO: add tailwind styling to book details
  return (
    <>
      <article className="border border-grey-500 flex flex-col content-center p-8 shadow-md">
        <TitleAndCover />
        {showDetails()}
      </article>
    </>
  );
};

export { BookData };
