import {injectable} from 'inversify';
import {NavigationContainerRef} from '@react-navigation/core';
import React from 'react';

export interface INavigation {
  navigationRef: React.RefObject<NavigationContainerRef>;

  routeNameRef: React.RefObject<string>;

  navigate: (screen: string, params: object) => void;
}

@injectable()
export class NavigationImpl implements INavigation {
  navigationRef: React.RefObject<NavigationContainerRef> = React.createRef();
  routeNameRef: React.RefObject<string> = React.createRef();

  public navigate(screen: string, params: object) {
    this.navigationRef?.current?.navigate(screen, params);
  }
}
