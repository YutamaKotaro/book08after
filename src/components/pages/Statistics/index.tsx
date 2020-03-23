// src/components/pages/Statistics/index.tsx
import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ProgressPanel from '../../molecules/ProgressPanel';
import { State } from '../../../lib/hooks/useToggle';
import { COLOR } from '../../../constants/theme';
import Todo from '../../molecules/Todo';
import HeaderText from '../../atoms/HeaderText';
import { DETAIL } from '../../../constants/path';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  headerTextContainer: {
    paddingLeft: 20,
    marginTop: 20,
    marginBottom: 8,
  },
  separator: {
    height: 1,
    backgroundColor: COLOR.SECONDARY,
  },
});

const props = {
  statistics: {
    numofCompleted: 10,
    numofAll: 25,
    numofUncompleted: 15,
    completedRatio: 0.4,
    uncompletedRatio: 0.6,
  },
  histories: [
    {
      id: '1',
      title: 'Todo1',
      detail: 'Done',
      isDone: true,
    },
    {
      id: '2',
      title: 'Todo2',
      detail: 'Done',
      isDone: true,
    },
  ],
};

export default function Statics() {
  const { statistics, histories } = props;
  const { navigate } = useNavigation();
  const onPressTodo = React.useCallback(
    (params: State & { forbiddenEdit: boolean }) => () => {
      navigate(DETAIL, params);
    },
    [navigate],
  );
  return (
    <FlatList
      data={histories}
      renderItem={({ item }) => <Todo onPress={onPressTodo} state={item} forbiddenEdit={true} />}
      ListHeaderComponent={
        <View>
          <ProgressPanel {...statistics} />
          <View style={styles.headerTextContainer}>
            <HeaderText text="History" />
          </View>
        </View>
      }
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}
