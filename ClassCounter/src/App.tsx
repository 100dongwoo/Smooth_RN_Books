import React from 'react';
// @ts-ignore
import Styled from 'styled-components/native';
import Counter from '~/Screens/Counter';

const Container = Styled.View`
    flex:1;
    background-color:#eee;
`;
const App = () => {
  return (
    <Container>
      <Counter title={'this is a Class Counter App'} initValue={5} />
    </Container>
  );
};

export default App;
