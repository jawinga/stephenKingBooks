export interface Book {
  id: number;
  Year: number;
  Title: string;
  handle: string;
  Publisher: string;
  ISBN: string;
  Pages: number;
  Notes: string[];
  created_at: string;
  villains: { name: string; url: string }[];
}
// export interface Welcome {
//     data: Datum[];
// }

// export interface Datum {
//     id:         number;
//     Year:       number;
//     Title:      string;
//     handle:     string;
//     Publisher:  string;
//     ISBN:       string;
//     Pages:      number;
//     Notes:      string[];
//     created_at: Date;
//     villains:   Villain[];
// }

// export interface Villain {
//     name: string;
//     url:  string;
// }
