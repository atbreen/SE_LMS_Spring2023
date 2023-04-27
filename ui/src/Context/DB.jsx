import React, { useCallback, useContext, useMemo, useState } from "react";

const defaultDB = {
  users: [
    {
      userid: "0001",
      firstname: "Jackie",
      lastname: "Moore",
      emailaddress: "jmoore@email.com",
      phonenumber: "222-636-5858",
      status: "Delinquent",
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
      isbn: "3332548469",
      genre: "Non-Fiction",
      copies: 10,
    },
    {
      bookid: "1",
      category: "E-Book",
      title: "I had More to Say -- Another Memoir",
      author: "Person Humanson",
      isbn: "1111656587",
      genre: "Non-Fiction",
      copies: 2,
    },
    {
      bookid: "2",
      category: "Book",
      title: "I Guess I could be Done Now -- Yet Another Memoir",
      author: "Person Humanson",
      isbn: "5735991049",
      genre: "Non-Fiction",
      copies: 5,
    },
    {
      bookid: "3",
      category: "Book",
      title: "Harry Potter and the Philosopher's Stone",
      author: "JK Rowling",
      isbn: "0747532745",
      genre: "Fiction",
      copies: 5,
    },
    {
      bookid: "4",
      category: "Book",
      title: "Harry Potter and the Chamber of Secrets",
      author: "JK Rowling",
      isbn: "0439064872",
      genre: "Fiction",
      copies: 3,
    },
    {
      bookid: "5",
      category: "Book",
      title: "Harry Potter and the Prisoner of Azkaban",
      author: "JK Rowling",
      isbn: "0439136369",
      genre: "Fiction",
      copies: 2,
    },
    {
      bookid: "6",
      category: "Book",
      title: "Harry Potter and the Goblet of Fire",
      author: "JK Rowling",
      isbn: "0439139597",
      genre: "Fiction",
      copies: 4,
    },
    {
      bookid: "7",
      category: "Book",
      title: "Harry Potter and the Order of the Phoenix",
      author: "JK Rowling",
      isbn: "0439358078",
      genre: "Fiction",
      copies: 6,
    },
    {
      bookid: "8",
      category: "Book",
      title: "Foundation",
      author: "Isaac Asimov",
      isbn: "0553382578",
      genre: "Fiction",
      copies: 1,
    },
    {
      bookid: "9",
      category: "Book",
      title: "Foundation and Empire",
      author: "Isaac Asimov",
      isbn: "0246118326",
      genre: "Fiction",
      copies: 1,
    },
    {
      bookid: "10",
      category: "Book",
      title: "Second Foundation",
      author: "Isaac Asimov",
      isbn: "0007270518",
      genre: "Fiction",
      copies: 1,
    },
  ],
  borrow: [
    {
      userid: "0001",
      bookid: "1",
      dateborrowed: "2022-11-11T12:00:00Z",
      duedate: "2023-05-12T12:00:00Z",
      returned: false,
    },
    {
      userid: "0001",
      bookid: "0",
      dateborrowed: "2023-04-04T12:00:00Z",
      duedate: "2023-05-05T12:00:00Z",
      returned: false,
    },
    {
      userid: "0001",
      bookid: "2",
      dateborrowed: "2023-01-01T12:00:00Z",
      duedate: "2023-03-03T12:00:00Z",
      returned: false,
    },
    {
      userid: "0001",
      bookid: "6",
      dateborrowed: "2023-01-01T12:00:00Z",
      duedate: "",
      returned: false,
    },
    {
      userid: "0001",
      bookid: "4",
      dateborrowed: "2023-01-01T12:00:00Z",
      duedate: "2023-08-02T12:00:00Z",
      returned: false,
    },
    {
      userid: "0001",
      bookid: "3",
      dateborrowed: "2023-01-01T12:00:00Z",
      duedate: "",
      returned: true,
    },
    {
      userid: "0001",
      bookid: "10",
      dateborrowed: "2023-01-01T12:00:00Z",
      duedate: "",
      returned: true,
    },
    {
      userid: "0001",
      bookid: "8",
      dateborrowed: "2023-01-01T12:00:00Z",
      duedate: "2023-06-07T12:00:00Z",
      returned: false,
    },
  ],
};
const DBContext = React.createContext({
  db: defaultDB,
  handleAddBorrow: (userid, bookid) => {},
});

export function DBProvider({ children }) {
  const [db, setDb] = useState(defaultDB);
  const handleAddBorrow = useCallback((userid, bookid) => {
    setDb((prevDb) => ({
      ...prevDb,
      //TODO: update num of copies available
      borrow: [
        ...prevDb.borrow,
        {
          userid,
          bookid,
          dateborrowed: new Date().toISOString(),
          duedate: new Date(
            new Date().valueOf() + 1000 * 60 * 60 * 24 * 7
          ).toISOString(),
        },
      ],
    }));
  }, []);
  const value = useMemo(() => ({ db, handleAddBorrow }), [db, handleAddBorrow]);
  return <DBContext.Provider value={value}>{children}</DBContext.Provider>;
}

export const useSearchUsers = (searchString) => {
  const { db } = useContext(DBContext);
  const s = searchString.toLowerCase();
  if (!searchString) return [];
  return db.users.filter(
    (user) =>
      Object.values(user).filter((value) => value.toLowerCase().includes(s))
        .length
  );
};

export const useSearchMedia = (searchString) => {
  const { db } = useContext(DBContext);
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
  const { db } = useContext(DBContext);
  return db.borrow
    .filter((item) => item.userid === userid)
    .map((item) => ({
      ...item,
      book: db.media.find((m) => m.bookid === item.bookid),
    }))
    .reverse();
};

export const useBorrow = (userid) => {
  const { db } = useContext(DBContext);
  return db.borrow
    .filter((item) => item.userid === userid && item.duedate)
    .map((item) => ({
      ...item,
      book: db.media.find((m) => m.bookid === item.bookid),
    }))
    .reverse();
};

export const useHandleAddBorrow = () => useContext(DBContext).handleAddBorrow;
