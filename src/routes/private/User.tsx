import Layout from "../../components/layouts/Layout"
import SignOut from "../../components/signOut/SignOut"
import Title from "../../components/admin-and-user/@Title/Title"
import useAuth from "../../hooks/useAuth"

const User = () => {
  const { auth }: any = useAuth();
  const username = auth?.username

  return (
    <Layout>
      <Title title={username} />
      <SignOut />
    </Layout>
  )
}

export default User