import React from "react";
import { Searchbar } from "react-native-paper";
import useLoadingStore from "@/store/search-loading";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const { isLoading, setLoading } = useLoadingStore();
  const search = (text: string) => {
    setSearchQuery(text);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  return (
    <Searchbar placeholder="Search" onChangeText={search} value={searchQuery} />
  );
};

export default Search;
