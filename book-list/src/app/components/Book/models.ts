export interface BookDataBooksApiResponse {
  [bib_key: string]: BookDataBooksResponse;
}

export interface BookDataBooksResponse {
  info_url: string;
  bib_key: string;
  preview_url: string;
  thumbnail_url: string;
  preview: string;
  details: Details;
}

export interface Details {
  number_of_pages: number;
  table_of_contents: Chapter[];
  weight: string;
  covers: number[];
  lc_classifications: string[];
  latest_revision: number;
  source_records: string[];
  title: string;
  languages: Type[];
  subjects: string[];
  publish_country: string;
  by_statement: string;
  oclc_numbers: string[];
  type: Type;
  physical_dimensions: string;
  revision: number;
  publishers: string[];
  description: string;
  physical_format: string;
  last_modified: {
    type: Type;
    value: Value;
  };
  key: string;
  authors: Author[];
  publish_places: string[];
  pagination: string;
  created: {
    type: Type;
    value: Value;
  };
  lccn: string[];
  notes: string;
  identifiers: {
    [website: string]: string[];
  };
  isbn_13: string[];
  dewey_decimal_class: string[];
  isbn_10: string[]
  publish_date: string;
  works: Type[];
}

export interface Chapter {
  title: string;
  type: Type;
  level: number;
}

export interface Author {
  name: string;
  key: string;
}

export interface Type {
  key: string;
}

export interface Value {
  value: string;
}
