import React from 'react';
import Profile from './Profile';
import renderer from 'react-test-renderer';
import { ActivityIndicator } from 'react-native';

describe('Profile Initial', () => {
  it('Should have the codenation logo', () => {
    const instance = renderer.create(<Profile />).root;

    expect(instance.findByProps({className: 'header-image'}).props.source.uri).toEqual("https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png");
  })
})
