import { BookData } from "@/app/components/Book/BookData"
import { BookISBN } from "../app/components/Book/models"


export default function Home() {
  //todo: call subjects API with random subject, or call search API with random term
  const books: BookISBN[] = [
    {bibkey: "ISBN:0618002219"},
    {bibkey: "ISBN:0618002235"},
    {bibkey: "ISBN:0618002243"},
    {bibkey: "ISBN:9780393090185"},
    {bibkey: "ISBN:9781415912218"},
    {bibkey: "ISBN:0140316663"},
  ]

  return (
    <div>
    {books.map((book,i) => <BookData bibkey={book.bibkey} crop={true} key={i} />)}
    </div>
  )
}
