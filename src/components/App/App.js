import './App.css';
import { SignUp } from '../SignUp/SignUp';
import { LogIn } from '../LogIn/login';
import ProjectSection from '../ProjectSection/ProjectSection';
import SideBar from '../SideBar/SideBar';

function App() {
  return (
     <div className='row'>
       {/* <SignUp /> */}
       {/* <LogIn /> */}
       <SideBar></SideBar>
       <div className='col-10'><ProjectSection /></div>
       
     </div>
  );
}

export default App;
