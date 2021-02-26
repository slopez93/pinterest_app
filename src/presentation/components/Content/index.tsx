import React from 'react';
import {
  KeyboardScrollView,
  ScrollView,
  SafeAreaViewStyled,
  Wrapper,
} from './styles';

type ContentProps = {
  children: React.ReactNode;
  testID?: string;
  scrollable?: boolean;
};

function Content({children, testID, scrollable}: ContentProps) {
  return (
    <KeyboardScrollView enableOnAndroid={false} extraScrollHeight={50}>
      <SafeAreaViewStyled>
        <Wrapper testID={testID}>
          {scrollable ? <ScrollView>{children}</ScrollView> : children}
        </Wrapper>
      </SafeAreaViewStyled>
    </KeyboardScrollView>
  );
}

Content.defaultProps = {
  scrollable: true,
};

export default Content;
