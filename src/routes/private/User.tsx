import Layout from "../../components/layouts/Layout"
import SignOut from "../../components/signOut/SignOut"
import Title from "../../components/admin-and-user/@Title/Title"
import InfoText from "../../components/admin-and-user/@InfoText/InfoText"
import UserInfo from "../../components/admin-and-user/user/UserInfo"

const User = () => {

  return (
    <Layout>
      <Title title='test user page' />
      <InfoText />
      <UserInfo/>
      <SignOut />
    </Layout>
  )
}

export default User