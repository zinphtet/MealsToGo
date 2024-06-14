import { View } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import styled from "styled-components/native";

const Loading = () => {
  return (
    <LoadingContainer>
      <ActivityIndicator color={MD2Colors.blue500} size={"large"} />
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled(View)`
  padding-block: 200px;
`;
