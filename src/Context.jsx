import React, { useContext, useEffect, useState } from "react";

const API_URL = `https://openlibrary.org/search.json?title`;
const API_URL1 = `https://openlibrary.org/search/authors.json?q=`;
const API_URL2 = `http://openlibrary.org/subjects/`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isloading, setIsLoadiing] = useState(true);
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("javascript");
  const [trend, setTrend] = useState([]);
  const [data, setData] = useState();

  const getdata = (value) => {
    setData(value);
  };

  const getBooks = async (url) => {
    setIsLoadiing(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBooks(data.docs);
    } catch (error) {
      console.log(error);
    }
  };

  const getSubBooks = async (url) => {
    setIsLoadiing(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setTrend(data.works);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      if (books != []) {
        getBooks(`${API_URL}=${query}`);
      } else {
        getBooks(`${API_URL1}=${query}`);
      }

      setIsLoadiing(false);
    }, 1000);

    return () => clearTimeout(timerOut);
  }, [query]);

  useEffect(() => {
    getSubBooks(`${API_URL2}${data}.json`);
  }, [data]);

  return (
    <AppContext.Provider
      value={{
        books,
        isloading,
        setQuery,
        trend,
        setTrend,
        getBooks,
        getSubBooks,
        data,
        setData,
        getdata,
        API_URL,
        query,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
