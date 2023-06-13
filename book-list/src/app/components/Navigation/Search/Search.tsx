'use-client'
import React, { useContext, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SearchContext } from "@/context/Context";

export function Search () {
    const router = useRouter();
    const [query, setQuery] = useState<string>();
    const [term, setTerm] = useContext(SearchContext);
    const pathname = usePathname()
    
    function updateQuery(event:React.FormEvent<HTMLButtonElement>){
        event.preventDefault()
        // router.push({
        //     pathname: '/',
        //     query: {search: encodeURI(query)}
        // });
        router.push(pathname + '?search=' + encodeURI(query as string))
        setTerm(query);
    };

    return(<>
        <div className="flex m-10 px-5">
            <form className="border-2 border-grey-800 rounded-md flex flex-auto justify-stretch">
                <label
                    htmlFor="Search"
                    className="flex flex-auto text-gray-300 m-2"
                >
                    Search for a book
                    <input
                        className="flex flex-auto mx-5 text-black pl-2 pr-2"
                        name="Search"
                        id="Search"
                        autoFocus={true}
                        maxLength={200}
                        value={query}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                    />
                </label>
                <label>
                    <button 
                        type="submit"
                        onClick={(e) => updateQuery(e)}
                    />
                </label>
            </form>
        </div>
    </>);
}