import React from "react";
import { useRouter } from "next/router";
import { BookData } from "@/app/components/Book/BookData";

export default function Page() {
    const router = useRouter(); 
    return <BookData bibkey={router.query.bibkey}/>
}