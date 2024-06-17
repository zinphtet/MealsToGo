import React from "react";
import { Searchbar } from "react-native-paper";
import useLoadingStore from "@/store/search-loading";
import { restaurantRequest } from "@/services/api";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const { isLoading, setLoading } = useLoadingStore();
  const search = (text: string) => {
    setSearchQuery(text);
    setLoading(true);
    restaurantRequest(searchQuery)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      }).finally(()=> setLoading(false));
  };
  return (
    <Searchbar placeholder="Search" onChangeText={search} value={searchQuery} />
  );
};

export default Search;
