import { Link } from 'react-router-dom';
import { TUser } from '../../utils/typesData';
import styles from './styles/userCard.module.scss';

type TUserProps = {
  user: TUser;
};

function UserCard({ user }: TUserProps) {
  return (
    <Link className={styles.cardLink} to={`/user/${user.id}`}>
      <div className={styles.cardWrapper}>
        <h2 className={styles.name}>{user.name}</h2>
        <ul className={styles.list}>
          <li>{`email: ${user.email}`}</li>
          <li>{`username: ${user.username}`}</li>
          <li>{`phone: ${user.phone}`}</li>
        </ul>

        <ul className={`${styles.list} ${styles.companyList}`}>
          <h3>Company:</h3>
          <li>{`name: ${user.company.name}`}</li>
          <li>{`bs: ${user.company.bs}`}</li>
          <li>{`catchPhrase: ${user.company.catchPhrase}`}</li>
        </ul>
      </div>
    </Link>
  );
}

export default UserCard;
