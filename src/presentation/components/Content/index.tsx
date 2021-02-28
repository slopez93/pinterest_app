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
  ml: number;
  mr: number;
};

function Content({children, testID, scrollable, mr, ml}: ContentProps) {
  return (
    <KeyboardScrollView enableOnAndroid={false} extraScrollHeight={100}>
      <SafeAreaViewStyled>
        {scrollable ? (
          <ScrollView>
            <Wrapper testID={testID} mr={mr} ml={ml}>
              {children}
            </Wrapper>
          </ScrollView>
        ) : (
          <Wrapper testID={testID} mr={mr} ml={ml}>
            children
          </Wrapper>
        )}
      </SafeAreaViewStyled>
    </KeyboardScrollView>
  );
}

Content.defaultProps = {
  scrollable: true,
  mr: 20,
  ml: 20,
};

export default Content;
