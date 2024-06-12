import { View, Text } from "react-native"
import CardComponent from "./item";
import styled from "styled-components/native";
const List = () => {


    return <ListContainer>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
    </ListContainer>
}

export default List;

const ListContainer = styled(View)`
    gap:  20px;

`