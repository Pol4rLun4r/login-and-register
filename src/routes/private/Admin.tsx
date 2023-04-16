import LayoutAdmin from './../../components/layouts/LayoutAdmin';
import SignOut from "../../components/signOut/SignOut";
import Title from '../../components/admin-and-user/@Title/Title';
import Users from '../../components/admin-and-user/admin/Users';

const Admin = () => {

  return (
    <>
      <LayoutAdmin>
        <Title title='admin' initTitle='welcome' />
        <Users />
        <SignOut />
      </LayoutAdmin>
    </>
  )
}

export default Admin