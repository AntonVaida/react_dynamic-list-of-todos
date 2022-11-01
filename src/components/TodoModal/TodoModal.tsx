import React, { useEffect, useState } from 'react';
import { Loader } from '../Loader';
import { Todo } from '../../types/Todo';
import { User } from '../../types/User';
import { getUser } from '../../api';

type Props = {
  setSelectTodo: (value: Todo | undefined) => void,
  selectTodo: Todo,
};

export const TodoModal: React.FC<Props> = ({ setSelectTodo, selectTodo }) => {
  const [selectUser, setSelectUser] = useState<User>();

  useEffect(() => {
    getUser(selectTodo.userId).then(response => setSelectUser(response));
  }, []);

  return (
    <div className="modal is-active" data-cy="modal">
      <div className="modal-background" />

      {!selectUser ? (
        <Loader />
      ) : (
        <div className="modal-card">
          <header className="modal-card-head">
            <div
              className="modal-card-title has-text-weight-medium"
              data-cy="modal-header"
            >
              {`Todo #${selectTodo.id}`}
            </div>

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              type="button"
              className="delete"
              data-cy="modal-close"
              onClick={() => setSelectTodo(undefined)}
            />
          </header>

          <div className="modal-card-body">
            <p className="block" data-cy="modal-title">
              {selectTodo.title}
            </p>

            <p className="block" data-cy="modal-user">
              {selectTodo.completed ? (
                <strong className="has-text-success">Done</strong>
              ) : (
                <strong className="has-text-danger">Planned</strong>
              )}

              {' by '}

              <a href={`mailto:${selectUser.email}`}>
                {selectUser.name}
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};