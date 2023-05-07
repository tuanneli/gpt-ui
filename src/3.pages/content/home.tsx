import Main from "../../4.widgets/content/main";
import Sidebar from "../../4.widgets/content/sidebar";
import '../style/home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <Main />
    </div>
  );
}

export default Home;