import React from 'react';
// @ts-ignore
import Styled from 'styled-components/native';
import WeatherView from '~/Screens/WeatherView';
const Container = Styled.View`
    flex:1;
    background-color:#eee;
`;
interface Props {}
const App = ({}: Props) => {
  return (
    <Container>
      <WeatherView />
    </Container>
  );
};
export default App;
