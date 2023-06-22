import React, { useContext, useEffect, useState } from "react";
import { BookList } from "@/app/components/Book/BookList";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import "../app/globals.css";
import {
  SearchContext,
} from "@/context/Context";

"use-client";

export default function Home() {
  const searchParam = useSearchParams();
  const router = useRouter();
  const [term, setTerm] = useContext(SearchContext);

  useEffect(() => {
    if (!term && searchParam?.has("search")) setTerm(searchParam.get("search"));
  }, [router]);

  return (
    <>
      <div>
        <BookList key={router.asPath} search={term} />
      </div>
    </>
  );
}
