import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Container} from './styles';

const LoadingIndicator = () => (
  <Container>
    <ActivityIndicator size="large" color="red" />
  </Container>
);

export default LoadingIndicator;
