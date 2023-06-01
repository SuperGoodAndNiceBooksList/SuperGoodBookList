import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { BookData } from "../BookData";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        "ISBN:9780980200447": {
          url: "https://openlibrary.org/books/OL22853304M/Slow_reading",
          key: "/books/OL22853304M",
          title: "Slow reading",
          authors: [
            {
              url: "https://openlibrary.org/authors/OL6548935A/John_Miedema",
              name: "John Miedema",
            },
          ],
          number_of_pages: 92,
          pagination: "80p.",
          weight: "1 grams",
          by_statement: "by John Miedema.",
          identifiers: {
            amazon: ["098020044X"],
            google: ["4LQU1YwhY6kC"],
            librarything: ["8071257"],
            goodreads: ["6383507"],
            isbn_10: ["1936117363"],
            isbn_13: ["9780980200447", "9781936117369"],
            lccn: ["2008054742"],
            oclc: ["297222669"],
            openlibrary: ["OL22853304M"],
          },
          classifications: {
            lc_classifications: ["Z1003 .M58 2009"],
            dewey_decimal_class: ["028/.9"],
          },
          publishers: [{ name: "Litwin Books" }],
          publish_places: [{ name: "Duluth, Minn" }],
          publish_date: "March 2009",
          subjects: [
            {
              name: "Books and reading",
              url: "https://openlibrary.org/subjects/books_and_reading",
            },
            {
              name: "Reading",
              url: "https://openlibrary.org/subjects/reading",
            },
          ],
          notes: "Includes bibliographical references and index.",
          table_of_contents: [
            {
              level: 0,
              label: "",
              title: "The personal nature of slow reading",
              pagenum: "",
            },
            {
              level: 0,
              label: "",
              title: "Slow reading in an information ecology",
              pagenum: "",
            },
            {
              level: 0,
              label: "",
              title: "The slow movement and slow reading",
              pagenum: "",
            },
            {
              level: 0,
              label: "",
              title: "The psychology of slow reading",
              pagenum: "",
            },
            {
              level: 0,
              label: "",
              title: "The practice of slow reading.",
              pagenum: "",
            },
          ],
          links: [
            { title: "Author's Website", url: "http://johnmiedema.ca" },
            {
              title: "Chapter 2",
              url: "http://litwinbooks.com/slowreading-ch2.php",
            },
            {
              title: "Get the e-book",
              url: "http://www.powells.com/biblio/91-9781936117369-0",
            },
          ],
          ebooks: [
            {
              preview_url: "https://archive.org/details/slowreading00mied",
              availability: "borrow",
              formats: {},
              borrow_url:
                "https://openlibrary.org/books/OL22853304M/Slow_reading/borrow",
              checkedout: false,
            },
          ],
          cover: {
            small: "https://covers.openlibrary.org/b/id/5546156-S.jpg",
            medium: "https://covers.openlibrary.org/b/id/5546156-M.jpg",
            large: "https://covers.openlibrary.org/b/id/5546156-L.jpg",
          },
        },
        "OLID:OL22853304M": {
          "bib_key": "OLID:OL22853304M",
          "info_url": "https://openlibrary.org/books/OL22853304M/Slow_reading",
          "preview": "borrow",
          "preview_url": "https://archive.org/details/slowreading00mied",
          "thumbnail_url": "https://covers.openlibrary.org/b/id/5546156-S.jpg",
          "details": {
          "number_of_pages": 92,
          "table_of_contents": [
          {
          "level": 0,
          "title": "The personal nature of slow reading",
          "type": {
          "key": "/type/toc_item"
          }
          },
          {
          "level": 0,
          "title": "Slow reading in an information ecology",
          "type": {
          "key": "/type/toc_item"
          }
          },
          {
          "level": 0,
          "title": "The slow movement and slow reading",
          "type": {
          "key": "/type/toc_item"
          }
          },
          {
          "level": 0,
          "title": "The psychology of slow reading",
          "type": {
          "key": "/type/toc_item"
          }
          },
          {
          "level": 0,
          "title": "The practice of slow reading.",
          "type": {
          "key": "/type/toc_item"
          }
          }
          ],
          "contributors": [
          {
          "role": "Cover Photographs",
          "name": "C. Ekholm"
          }
          ],
          "isbn_10": [
          "1936117363"
          ],
          "covers": [
          5546156
          ],
          "lc_classifications": [
          "Z1003 .M58 2009"
          ],
          "ocaid": "slowreading00mied",
          "weight": "1 grams",
          "source_records": [
          "marc:marc_loc_updates/v37.i01.records.utf8:4714764:907",
          "marc:marc_loc_updates/v37.i24.records.utf8:7913973:914",
          "marc:marc_loc_updates/v37.i30.records.utf8:11406606:914",
          "ia:slowreading00mied",
          "marc:marc_openlibraries_sanfranciscopubliclibrary/sfpl_chq_2018_12_24_run04.mrc:135742902:2094",
          "marc:marc_loc_2016/BooksAll.2016.part35.utf8:160727336:914",
          "promise:bwb_daily_pallets_2022-09-12"
          ],
          "title": "Slow reading",
          "languages": [
          {
          "key": "/languages/eng"
          }
          ],
          "subjects": [
          "Books and reading",
          "Reading"
          ],
          "publish_country": "mnu",
          "by_statement": "by John Miedema.",
          "oclc_numbers": [
          "297222669"
          ],
          "type": {
          "key": "/type/edition"
          },
          "physical_dimensions": "7.81 x 5.06 x 1 inches",
          "publishers": [
          "Litwin Books"
          ],
          "description": "\"A study of voluntary slow reading from diverse angles\"--Provided by publisher.",
          "physical_format": "Paperback",
          "key": "/books/OL22853304M",
          "authors": [
          {
          "key": "/authors/OL6548935A",
          "name": "John Miedema"
          }
          ],
          "publish_places": [
          "Duluth, Minn"
          ],
          "pagination": "80p.",
          "classifications": {},
          "lccn": [
          "2008054742"
          ],
          "notes": "Includes bibliographical references and index.",
          "identifiers": {
          "amazon": [
          "098020044X"
          ],
          "google": [
          "4LQU1YwhY6kC"
          ],
          "librarything": [
          "8071257"
          ],
          "goodreads": [
          "6383507"
          ]
          },
          "isbn_13": [
          "9780980200447",
          "9781936117369"
          ],
          "dewey_decimal_class": [
          "028/.9"
          ],
          "local_id": [
          "urn:sfpl:31223095026424",
          "urn:bwbsku:O8-CNK-818"
          ],
          "publish_date": "March 2009",
          "works": [
          {
          "key": "/works/OL13694821W"
          }
          ],
          "latest_revision": 24,
          "revision": 24,
          "created": {
          "type": "/type/datetime",
          "value": "2009-01-07T22:16:11.381678"
          },
          "last_modified": {
          "type": "/type/datetime",
          "value": "2022-12-04T10:37:36.772707"
          }
          }
          }
      }),
  })
) as jest.Mock;

describe("<BookData/>", () => {
  it("should render with ISBN correctly", async () => {
    render(<BookData bibkey="ISBN:9780980200447" />);
    await waitFor(() => {
      expect(screen.getByText("Slow reading")).toBeInTheDocument();
    });
  });
  it("should render with OLID correctly", async () => {
    render(<BookData bibkey="OLID:OL22853304M" />);
    await waitFor(() => {
      expect(screen.getByText("Slow reading")).toBeInTheDocument();
    });
  });
});
