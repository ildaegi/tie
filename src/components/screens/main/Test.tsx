import React from 'react';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

import constants from '../../../constants';
import { Text, Title } from '../../../components/ui/Texts';
import BasicTop from '../../templates/BasicTop';

export const TestScreenOptions: BottomTabNavigationOptions = {};
export type TestScreenParams = undefined;
export default function Test() {
  return (
    <BasicTop
      contants={
        <>
          <Title style={{}}>{testScreenConstants.title}</Title>
          <Text style={{ marginTop: 10 }}>{testScreenConstants.description}</Text>
          <Text style={{}}>{testScreenConstants.information}</Text>
        </>
      }
    />
  );
}

const testScreenConstants = {
  title: '여기는 테스트를 할 수 있는 화면입니다.',
  description: '여기는 컴포넌트 테스트를 할 수 있는 화면입니다!',
  information: '실제 어플에서는 테스트 화면이 제외됩니다.',
};
