import LayoutAdmin from './../../components/layouts/LayoutAdmin';
import SignOut from "../../components/signOut/SignOut";
import Title from '../../components/admin-and-user/@Title/Title';
import Users from '../../components/admin-and-user/admin/Users';
import InfoText from '../../components/admin-and-user/@InfoText/InfoText';

const Admin = () => {

  return (
    <LayoutAdmin>
      <Title title='test adm page' />
      <InfoText />
      <Users />
      <SignOut />
    </LayoutAdmin>
  )
};

export default Admin;