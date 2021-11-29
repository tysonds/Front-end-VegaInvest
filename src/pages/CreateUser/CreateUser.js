import './CreateUser.css';
import LogoHeader from '../../components/LogoHeader/LogoHeader.js';
import UserPWForm from '../../components/UserPWForm/UserPWForm.js';
function CreateUser() {
  return (
    <div className="CreateUser">
      <LogoHeader />
      <UserPWForm />
    </div>
  );
}

export default CreateUser;