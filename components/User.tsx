import React from 'react';
import { State } from './store';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userId: string) => dispatch({ type: 'LOGIN', userId }),
    logout: () => dispatch({ type: 'LOGOUT' }),
  };
};

interface User {
  id: string;
  emoji: string;
  name: string;
}

const users = [
  undefined,
  { id: '1', emoji: '😲', name: 'Vienas One' },
  { id: '2', emoji: '🤠', name: 'Du Two' },
  { id: '3', emoji: '😍', name: 'Trys Three' },
  { id: '4', emoji: '😷', name: 'Keturi Four' },
  { id: '5', emoji: '🤓', name: 'Penki Five' },
];

type BasicProps = State & ReturnType<typeof mapDispatchToProps>;

const Basic: React.FC<BasicProps> = (props: BasicProps) => {
  const handleUserSelect = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    props.login(evt.target.value);
  };

  if (props.loggedInUserId === undefined) {
    return (
      <div className="loginForm">
        <label htmlFor="login-select">Login as:</label>
        <select id="login-select" onChange={handleUserSelect} defaultValue="0">
          <option value="0">Select user...</option>
          <option value="1">
            {users[1].emoji} {users[1].name}
          </option>
          <option value="2">
            {users[2].emoji} {users[2].name}
          </option>
          <option value="3">
            {users[3].emoji} {users[3].name}
          </option>
          <option value="4">
            {users[4].emoji} {users[4].name}
          </option>
          <option value="5">
            {users[5].emoji} {users[5].name}
          </option>
        </select>

        <style>{`
          .loginForm {
            font-size: 1.25rem;
          }

          .loginForm select {
            font-size: 1.25rem;
          }
          .loginForm label {
            padding: 10px;
          }`}</style>
      </div>
    );
  }

  return (
    <div className="userInfo">
      <div>
        <span>Hello {users[props.loggedInUserId].name}</span>
        <br />
        <button
          onClick={() => {
            props.logout();
          }}
        >
          logout
        </button>
      </div>
      <span>{users[props.loggedInUserId].emoji}</span>
      <style>
        {`
        .userInfo {
          display: flex;
          align-items: center;
        }
        .userInfo > div {
          flex: 1 0;
          text-align: left;
          font-size: 1.2rem;
        }
        .userInfo button {
          font-size: 1.2rem;
        }
        .userInfo div span {
          padding-right: 1.2rem;
        }
        
        .userInfo > span {
          font-size: 3rem;
          background: white;
          border-radius: 3px;
        }

      `}
      </style>
    </div>
  );
};

export default connect((state: State) => state, mapDispatchToProps)(Basic);
