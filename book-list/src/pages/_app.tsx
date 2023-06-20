import { BookDataBooksResponse, Favorites, Option } from "@/app/components/Book/models";
import { Layout } from "@/app/components/Layout/Layout";
import { FavoritesContext, OptionContext, SearchContext } from "@/context/Context";
import React, { useState } from "react";

export default function MyApp({ Component, pageProps }: any) {
  const [favorites, setFavorites] = useState<Favorites | null | undefined>();
  const [term, setTerm] = useState<string | null | undefined>("");
  const [option, setOption] = useState<Option>({selection:""});
  return (
    <>
      <FavoritesContext.Provider value={[favorites, setFavorites]}>
        <SearchContext.Provider value={[term, setTerm]}>
          <OptionContext.Provider value={[option,setOption]}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </OptionContext.Provider>
        </SearchContext.Provider>
      </FavoritesContext.Provider>
    </>
  );
}
