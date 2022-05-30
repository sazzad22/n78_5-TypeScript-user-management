import React, { useEffect, useState } from 'react';
import UserModel from './types/UserModel';
import User from './User';

const Users = () => {
    const [users, setUsers] = useState<UserModel[]>([])
    const [teams, setTeams] = useState<UserModel[]>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => setUsers(data));
    },[])
    const handleAddUser = (user: UserModel):void => {
        const newTeam = [...teams, user];
        setTeams(newTeam)
    }
    return (
        <div>
            <h2>{teams.length}</h2>
            {
                users.map(user => <User user={user}
                    handleAddUser={handleAddUser}
                ></User>)
            }
        </div>
    );
};

export default Users;