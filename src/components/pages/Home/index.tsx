// src/components/pages/Home/index.tsx
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Todos from '../../organisms/Todos';
import { COLOR } from '../../../constants/theme';
import { DETAIL, INPUT } from '../../../constants/path';
import useToggle from '../../../lib/hooks/useToggle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: COLOR.MAIN_DARK,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});

const todos = [
  {
    id: '1',
    title: 'Todo',
    detail: 'to do',
    isDone: false,
  },
  {
    id: '2',
    title: 'Done',
    detail: 'done task',
    isDone: true,
  },
];
const actions = {
  removeTodo: () => {},
  toggleTodo: () => {},
};

export default function Home() {
  const { navigate } = useNavigation();
  const onPress = React.useCallback(() => {
    navigate(INPUT);
  }, [navigate]);
  const onPressTodo = React.useCallback(
    params => () => {
      navigate(DETAIL, params);
    },
    [navigate],
  );

  return (
    <View style={styles.container}>
      <Todos todos={todos} actions={actions} useToggle={useToggle} forbiddenEdit={false} onPress={onPressTodo} />
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Icon color={COLOR.PRIMARY} size={24} name="plus" />
      </TouchableOpacity>
    </View>
  );
}
