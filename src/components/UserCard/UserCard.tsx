import { TUser } from '../../utils/typesData';

type TUserProps = {
  user: TUser;
};

function UserCard({ user }: TUserProps) {
  return (
    <div style={{ border: '1px solid red' }}>
      <h2>{user.name}</h2>
      <ul>
        <li>{`email: ${user.email}`}</li>
        <li>{`username: ${user.username}`}</li>
        <li>{`phone: ${user.phone}`}</li>
        <ul>
          <h3>Company:</h3>
          <li>{`name: ${user.company.name}`}</li>
          <li>{`bs: ${user.company.bs}`}</li>
          <li>{`catchPhrase: ${user.company.catchPhrase}`}</li>
        </ul>
      </ul>
    </div>
  );
}

export default UserCard;
