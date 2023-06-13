import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { BookData } from "@/app/components/Book/BookData";
import "../../app/globals.css";
import { Layout } from "@/app/components/Layout/Layout";
import { FavoritesContext } from "@/context/Context";

("use-client");

export default function Page() {
  const router = useRouter();
  const [favorites, setFavorites] = useContext(FavoritesContext);
  console.log(favorites);

  if (!favorites)
    return (
      <>
        <Layout>User has no favorites.</Layout>
      </>
    );

  return (
    <>
      <Layout>
        <div className="grid grid-cols-6 gap-5">
          {favorites.map((bookData, idx) => (
            <BookData key={idx} bibkey={"prefetched"} crop={true} preFetchedData={bookData}/>
          ))}
        </div>
      </Layout>
    </>
  );
}
