import React, { FC } from "react";
import UserModel from "./types/UserModel";

// interface Props {
//   name: string;
//   handleAddUser: () => void;
// }

interface Props{
  user: UserModel,
  handleAddUser: (user: UserModel) => void,
}

const User: FC<Props> = (props) => {
  const { user, handleAddUser } = props;
  const { name, email } = props.user;
  
  return (
    <div>
      <h2>{name} has email {email}</h2>
      <button onClick={()=>handleAddUser(user)} > Add to team</button>
    </div>
  );
};

export default User;
