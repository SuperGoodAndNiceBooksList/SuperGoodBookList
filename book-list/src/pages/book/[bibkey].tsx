import React from "react";
import { useRouter } from "next/router";
import { BookData } from "@/app/components/Book/BookData";
import { Navigation } from "@/app/components/Navigation/Navigation";

export default function Page() {
    const router = useRouter();
    let bibkey = "";
    if (typeof router.query.bibkey === "string"){
        bibkey=router.query.bibkey;
    }
    return (<>
    <Navigation/>
    <BookData bibkey={bibkey} subjectsLimit={20} />
    </>
    );
}