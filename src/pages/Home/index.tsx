import { Login, Logout, ResultCard, SearchArea } from "../../components";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Login/>
      <Logout/>
      <ResultCard />
      <SearchArea/>
    </div>
  );
};

export default Home;
