import React from 'react';

import {ViewStyled} from './styles';

type Props = {
  testID?: string;
  children: React.ReactNode;
  flex?: number;
  dir: string;
  justify: string;
  align: string;
  mt: number;
  mb: number;
  ml: number;
  mr: number;
};

function View({
  testID,
  children,
  flex,
  dir,
  justify,
  align,
  mt,
  mb,
  mr,
  ml,
}: Props) {
  return (
    <ViewStyled
      testID={testID}
      flex={flex}
      dir={dir}
      justify={justify}
      align={align}
      mt={mt}
      mb={mb}
      mr={mr}
      ml={ml}>
      {children}
    </ViewStyled>
  );
}

View.defaultProps = {
  align: 'stretch',
  justify: 'flex-start',
  dir: 'column',
  mt: 0,
  mb: 0,
  ml: 0,
  mr: 0,
};

export default View;
