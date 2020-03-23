// src/components/pages/UserInfo/index.tsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { COLOR } from '../../../constants/theme';
import { Context as UiContext, Status } from '../../../contexts/ui';
import { Button, Avatar, LabelValueContainer } from '../../atoms';
import formatDate from '../../../lib/format-date';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  nameText: {
    color: COLOR.WHITE,
    fontSize: 20,
    marginTop: 5,
  },
  button: {
    marginTop: 30,
  },
});

const userState = {
  name: 'test',
  createdAt: '2020/01/01',
  mailAddress: 'test@rn.com',
};

export default function UserInfo() {
  const { setApplicationState } = React.useContext(UiContext);
  const signOut = React.useCallback(async () => {
    setApplicationState(Status.UN_AUTHORIZED);
  }, [setApplicationState]);

  const source = React.useMemo(() => require('../../../../assets/person.png'), []);

  return (
    <View style={styles.container}>
      <View style={styles.imageIconContainer}>
        <Avatar source={source} />
        <Text style={styles.nameText}>{userState.name}</Text>
      </View>
      <LabelValueContainer label="e-mail" value={userState.mailAddress} />
      <LabelValueContainer
        label="registeredAt"
        value={userState.createdAt && formatDate(new Date(userState.createdAt))}
      />
      <Button style={styles.button} onPress={signOut} label="Sign Out" />
    </View>
  );
}
