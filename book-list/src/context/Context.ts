import { BookDataBooksResponse } from "@/app/components/Book/models";
import React, { useState } from "react";

export const SearchContext = React.createContext<[string| null | undefined, React.Dispatch<React.SetStateAction<string | null | undefined>>]>([null!, () => null!]);

export const FavoritesContext = React.createContext<[BookDataBooksResponse[] | null | undefined, React.Dispatch<React.SetStateAction<BookDataBooksResponse[] | null | undefined>>]>([null!, () => null!]);