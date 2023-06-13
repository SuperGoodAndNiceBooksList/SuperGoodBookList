"use-client";
import React, {useEffect, useState} from "react";
import { BookData } from "@/app/components/Book/BookData";
import { BookISBN } from "../app/components/Book/models";
import { BookList } from "@/app/components/Book/BookList";
import { Layout } from "@/app/components/Layout/Layout";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import "../app/globals.css";


export default function Home() {
  let searchParam = useSearchParams();
  let router = useRouter();
  const [term, setTerm] = useState(searchParam?.has("search") ? searchParam.get("search") : "broccoli");

  function assignTerm(){
    if(searchParam?.has('search')) {
      setTerm(searchParam.get('search'))
    }
    console.log("{index} term is ",term, "pathanme is",router.asPath)
  }
  useEffect(() => {
    assignTerm()
  }, [router.asPath, searchParam?.toString])
  //todo: call subjects API with random subject, or call search API with random term
  return ( <>
    <Layout>
      <div>
        <BookList key={router.asPath} search={term} />
      </div>
    </Layout>
  </>)
}
