"use-client";
import React, { useEffect, useState } from "react";
import { BookData } from "@/app/components/Book/BookData";
import { BookISBN } from "../app/components/Book/models";
import { BookList } from "@/app/components/Book/BookList";
import { Layout } from "@/app/components/Layout/Layout";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import "../app/globals.css";
import { SearchContext } from "@/context/Context";

export default function Home() {
  const searchParam = useSearchParams();
  const router = useRouter();
  const [term, setTerm] = useState<string | null | undefined>();

  useEffect(()=>{
    if (!term && searchParam?.has('search')) setTerm(searchParam.get('search'));
  }, [router])

  //todo: call subjects API with random subject, or call search API with random term
  return (
    <>
      <SearchContext.Provider value={[term, setTerm]} >
        <Layout>
          <div>
            <BookList key={router.asPath} search={term} />
          </div>
        </Layout>
      </SearchContext.Provider>
    </>
  );
}
