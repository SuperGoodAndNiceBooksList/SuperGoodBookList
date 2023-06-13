import React, { useState } from "react";

export const SearchContext = React.createContext<[string| null | undefined, React.Dispatch<React.SetStateAction<string | null | undefined>>]>([null!, () => null!]);