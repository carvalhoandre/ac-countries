import { useState } from 'react';
import { STORAGE_KEYS } from "./storage-key.config";

export const useStorage = () => {
  const [searchHistory, setSearchHistory] = useState(getSearchHistory());

  function getSearchHistory() {
    const storedHistory = localStorage.getItem(STORAGE_KEYS?.searchHistory);
    return storedHistory ? JSON.parse(storedHistory) : [];
  }

  const setSearchStorage = (search:string) => {
    if (!search) return;

    const updatedHistory = [...searchHistory.filter((item: string) => item !== search), search].slice(-5); // limitando em 5 recente pesquisas
    localStorage.setItem(STORAGE_KEYS?.searchHistory, JSON.stringify(updatedHistory));
    setSearchHistory(updatedHistory);
  };

  const getSearchStorage = () => {
    return searchHistory;
  };

  return { setSearchStorage, getSearchStorage };
};
