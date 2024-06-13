import { View, Text, ScrollView, FlatList } from "react-native";
import CardComponent from "./item";
import styled from "styled-components/native";
const List = () => {
  return (
    <FlatList data={[{id : 2},{id : 3}, {id : 4}]} showsVerticalScrollIndicator={false} renderItem={()=><CardComponent/>} >
     
    </FlatList>
  );
};

export default List;

const ListContainer = styled(View)`
  gap: 20px;
  /* scrollbar-width: 0px; */
`;
