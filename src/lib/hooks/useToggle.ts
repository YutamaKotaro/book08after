// src/lib/hooks/useToggle.ts
/* eslint react-hooks/exhaustive-deps: 0 */
import React from 'react';

export interface Actions {
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}
export type State = {
  id: string;
  title: string;
  detail?: string;
  isDone?: boolean;
};
export interface EnableEditProps {
  actions: Actions;
  state: State;
  forbiddenEdit: false;
}
export interface DisableEditProps {
  state: State;
  forbiddenEdit: true;
}

export default function useToggle(props: EnableEditProps | DisableEditProps) {
  const rowRef = React.useRef<any>(null);
  const toggleTodo = React.useCallback(async () => {
    !props.forbiddenEdit && props.actions.toggleTodo(props.state.id);
    rowRef.current.closeRow();
  }, [!props.forbiddenEdit && props.actions, props.forbiddenEdit, props.state.id]);
  const removeTodo = React.useCallback(() => {
    !props.forbiddenEdit && props.actions.removeTodo(props.state.id);
  }, [!props.forbiddenEdit && props.actions, props.forbiddenEdit, props.state.id]);

  return {
    toggleTodo,
    rowRef,
    removeTodo,
  };
}
