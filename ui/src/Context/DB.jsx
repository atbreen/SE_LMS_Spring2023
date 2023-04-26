import React, { useContext } from "react";

const defaultDB = {
  users: [
    {
      userid: "0001",
      firstname: "Jackie",
      lastname: "Moore",
      emailaddress: "jmoore@email.com",
      phonenumber: "222-636-5858",
      status: "In Good Standing",
    },
    {
      userid: "0601",
      firstname: "Jack",
      lastname: "Dunham",
      emailaddress: "jdunham@school.edu",
      phonenumber: "222-863-5548",
      status: "In Good Standing",
    },
    {
      userid: "7706",
      firstname: "Marion",
      lastname: "Juniper",
      emailaddress: "juniem@llc.org",
      phonenumber: "222-993-5318",
      status: "Delinquent",
    },
  ],
  media: [
    {
      bookid: "0",
      category: "Book",
      title: "Woah, A Book -- A Memoir",
      author: "Person Humanson",
      isbn: "02-1115643",
      genre: "Non-Fiction",
      copies: 10,
    },
    {
      bookid: "1",
      category: "E-Book",
      title: "I had More to Say -- Another Memoir",
      author: "Person Humanson",
      isbn: "02-1164643",
      genre: "Non-Fiction",
      copies: 2,
    },
    {
      bookid: "2",
      category: "Book",
      title: "I Guess I could be Done Now -- Yet Another Memoir",
      author: "Person Humanson",
      isbn: "02-1680143",
      genre: "Non-Fiction",
      copies: 5,
    },
  ],
  borrow: [
    {
      userid: "0001",
      bookid: "1",
      dateborrowed: "2022-11-11T12:00:00Z",
      duedate: "",
    },
    {
      userid: "0001",
      bookid: "0",
      dateborrowed: "2023-04-04T12:00:00Z",
      duedate: "2023-05-05T12:00:00Z",
    },
    {
      userid: "0001",
      bookid: "2",
      dateborrowed: "2023-01-01T12:00:00Z",
      duedate: "2023-03-03T12:00:00Z",
    },
  ],
};
const DBContext = React.createContext(defaultDB);

export function DBProvider({ children }) {
  return <DBContext.Provider value={defaultDB}>{children}</DBContext.Provider>;
}

export const useSearchUsers = (searchString) => {
  const db = useContext(DBContext);
  const s = searchString.toLowerCase();
  if (!searchString) return [];
  return db.users.filter(
    (user) =>
      Object.values(user).filter((value) => value.toLowerCase().includes(s))
        .length
  );
};

export const useSearchMedia = (searchString) => {
  const db = useContext(DBContext);
  const s = searchString.toLowerCase();
  if (!searchString) return [];
  return db.media.filter(
    (item) =>
      Object.values(item).filter((value) =>
        value.toString().toLowerCase().includes(s)
      ).length
  );
};

export const useUserHistory = (userid) => {
  const db = useContext(DBContext);
  return db.borrow
    .filter((item) => item.userid === userid)
    .map((item) => ({
      ...item,
      book: db.media.find((m) => m.bookid === item.bookid),
    }));
};
