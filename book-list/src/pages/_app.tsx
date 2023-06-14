import { BookDataBooksResponse, Favorites } from "@/app/components/Book/models";
import { FavoritesContext } from "@/context/Context";
import React, { useState } from "react";

export default function MyApp({ Component, pageProps }: any) {
  const [favorites, setFavorites] = useState<
    Favorites | null | undefined
  >();
  return (
    <>
      <FavoritesContext.Provider value={[favorites, setFavorites]}>
        <Component {...pageProps} />
      </FavoritesContext.Provider>
    </>
  );
}
