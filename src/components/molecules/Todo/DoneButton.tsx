// src/components/molecules/Todo/DoneButton.tsx
import React from 'react';
import { StyleSheet } from 'react-native';
import { COLOR } from '../../../constants/theme';
import IconButton from '../../atoms/IconButton';
import { State } from '../../../lib/hooks/useToggle';

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR.PRIMARY,
  },
  done: {
    backgroundColor: COLOR.MAIN_DARK,
  },
});

interface DoneProps {
  state: State;
  onPress: () => void;
}

export default function DoneButton(props: DoneProps) {
  const {
    state: { isDone },
    onPress,
  } = props;
  return (
    <IconButton onPress={onPress} icon={isDone ? 'restore' : 'check'} style={isDone ? styles.done : styles.button} />
  );
}
