import React from 'react';
// @ts-ignore
import Styled from 'styled-components/native';
import {Text} from 'react-native';
const Container = Styled.View`
    flex:1;
    background-color:#eee;
`;
interface Props {}
const App = ({}: Props) => {
  return (
    <Container>
      <Text>asda</Text>
    </Container>
  );
};
export default App;
