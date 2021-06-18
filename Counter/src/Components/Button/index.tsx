// @ts-ignore
import React from 'react';
// @ts-ignore
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity``;
const Icon = Styled.Image``;

interface Props {
  iconName: 'plus' | 'minus';
  onPress?: () => void;
}

const Button = ({iconName, onPress}: Props) => {
  return (
    <Container onPress={onPress}>
      <Icon
        source={
          iconName === 'plus'
            ? require('~/Assets/images/add.png')
            : require('~/Assets/images/remove.png')
        }
      />
    </Container>
  );
};
// @ts-ignore
export default Button;
