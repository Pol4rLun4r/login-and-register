import H1 from "../../components/test/@h1"
import useRefreshToken from "../../hooks/useRefresh"

const Admin = () => {
  const refresh = useRefreshToken();

  return (
    <>
      {/* <H1 Title="admin" InitTitle="welcome" /> */}
      <br />
      <button onClick={() => refresh()}>refresh</button>
    </>
  )
}

export default Admin