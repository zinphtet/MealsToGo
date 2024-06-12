import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import styled from "styled-components/native";
import { Star } from "lucide-react-native";
import YellowStar from "./star";
const imgUrl =
  "https://images.pexels.com/photos/18925511/pexels-photo-18925511/free-photo-of-petit-minou-lighthouse-in-evening.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const CardComponent = () => (
  <Card>
    <Card.Cover source={{ uri: imgUrl }} />
    <Card.Content style={{ paddingVertical: 20, gap: 10 }}>
      <CardTitle>This is card title</CardTitle>

      <StartInfoWrapper>
        <StarContainer>
          <YellowStar/>
          <YellowStar/>
          <YellowStar/>
          <YellowStar/>
          <YellowStar/>
        </StarContainer>
        <Text>Hello</Text>
      </StartInfoWrapper>
      <Address>23th street , AungMyayTharZan , Mandalay</Address>
    </Card.Content>
  </Card>
);

export default CardComponent;

const CardTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;
const StartInfoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const StarContainer = styled.View`
  flex-direction: row;
  gap: 2px;
`;

const Address = styled.Text`
  font-size: 14px;
  font-style: italic;
`;
