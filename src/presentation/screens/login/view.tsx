import React from 'react';

import {Content, TextInput, Button, Header} from '../../components';
import {Title, FormWrapper, Wrapper} from './styles';

type Props = {
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  handleSubmit: () => void;
  isFormValid: boolean;
  isLoading: boolean;
};

function View({
  email,
  password,
  setEmail,
  setPassword,
  handleSubmit,
  isFormValid,
  isLoading,
}: Props) {
  return (
    <Content scrollable={false}>
      <Header />
      <Wrapper>
        <Title>Log In</Title>
        <FormWrapper>
          <TextInput
            placeholder="Email"
            value={email}
            onChange={setEmail}
            mb={25}
          />
          <TextInput
            secureTextEntry
            placeholder="Password"
            value={password}
            onChange={setPassword}
          />
          <Button
            title="LOG IN WITH EMAIL"
            onPress={handleSubmit}
            disabled={!isFormValid}
            loading={isLoading}
            mt={30}
          />
        </FormWrapper>
      </Wrapper>
    </Content>
  );
}

export default View;
