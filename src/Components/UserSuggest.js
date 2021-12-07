import React, { Component, Fragment, useEffect, useState } from 'react';
import UserAvatar from 'react-user-avatar';
import PropTypes from "prop-types";
import Input from './Input';

const UserSuggest = ({ users, select, ...props }) => {
    const [activeUser, setActiveUser] = useState(0);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [showUsers, setShowUsers] = useState(false);
    const [userInput, setUserInput] = useState('');

    const onChange = e => {
        const userInput = e.currentTarget.value;

        const _filteredUsers = users.filter(
            user => user.username.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        setActiveUser(0);
        setFilteredUsers(_filteredUsers);
        setShowUsers(true);
        setUserInput(e.currentTarget.value);
    };

    const onClick = e => {
        e.stopPropagation();

        setUserInput(filteredUsers[e.currentTarget.dataset.key].username);
        select(filteredUsers[e.currentTarget.dataset.key]);

        setActiveUser(0);
        setFilteredUsers([]);
        setShowUsers(false);
    };

    const onKeyDown = e => {
        if (e.keyCode === 13) {
            setUserInput(filteredUsers[activeUser].username);
            select(filteredUsers[activeUser]);

            setShowUsers(false);
            setActiveUser(0);
        }
        else if (e.keyCode === 38) {
            if (activeUser === 0)
                return;

            setActiveUser(activeUser - 1);
        }
        else if (e.keyCode === 40) {
            if (activeUser - 1 === filteredUsers.length)
                return;
            setActiveUser(activeUser + 1);
        }
    };

    let usersListComponent;

    if (showUsers && userInput) {
        if (filteredUsers.length) {
            let count = 1;
            usersListComponent = (
                <ul className="absolute inset-x-0 bg-white dark:bg-gray-700 rounded-b border border-gray-200 dark:border-gray-600 text-gray-900 text-sm font-medium dark:text-white cursor-pointer">
                    {
                        filteredUsers.map((user, index) => {
                            if (props.limit === 0 || count <= props.limit) {
                                let className = "flex flex-row gap-x-2 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-900";

                                if (index === activeUser) {
                                    className = "flex flex-row gap-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-900";
                                }

                                count = count + 1;

                                return (
                                    <li className={className} key={user.id} data-key={index} onClick={onClick}>
                                        {
                                            (props.photos)
                                                ? <UserAvatar size="18" name={user.name} src={`/user/${user.id}/photo`} />
                                                : null
                                        }
                                        <strong>{user.name}</strong> <em>({user.email})</em>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            );
        } else {
            usersListComponent = (
                <ul className="absolute inset-x-0 bg-white dark:bg-gray-700 rounded-b border border-gray-200 dark:border-gray-600 text-gray-900 text-sm font-medium dark:text-white cursor-pointer">
                    <li className="px-4 py-2 text-center"><em>{props.noMatchesText}</em></li>
                </ul>
            );
        }
    }

    return (
        <div className="relative">
            <Input type="text" onChange={onChange} onKeyDown={onKeyDown} value={userInput}
                placeholder={props.placeholder} autoComplete="no" />
            {usersListComponent}
        </div>
    );
}

UserSuggest.propTypes = {
    users: PropTypes.instanceOf(Array),
    select: PropTypes.instanceOf(Function),
    photos: PropTypes.bool,
    placeholder: PropTypes.string,
    noMatchesText: PropTypes.string,
    limit: PropTypes.number,
    select: PropTypes.instanceOf(Function),
};

UserSuggest.defaultProps = {
    users: [],
    select: function () { return true; },
    photos: true,
    placeholder: 'Start typing a username...',
    noMatchesText: 'No matching users found!',
    limit: 0
};

export default UserSuggest;