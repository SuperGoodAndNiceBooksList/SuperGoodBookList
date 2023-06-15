import { BookDataBooksResponse, Favorites } from "@/app/components/Book/models";
import { Layout } from "@/app/components/Layout/Layout";
import { FavoritesContext, SearchContext } from "@/context/Context";
import React, { useState } from "react";

export default function MyApp({ Component, pageProps }: any) {
  const [favorites, setFavorites] = useState<Favorites | null | undefined>();
  const [term, setTerm] = useState<string | null | undefined>();
  return (
    <>
      <FavoritesContext.Provider value={[favorites, setFavorites]}>
        <SearchContext.Provider value={[term, setTerm]}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SearchContext.Provider>
      </FavoritesContext.Provider>
    </>
  );
}
