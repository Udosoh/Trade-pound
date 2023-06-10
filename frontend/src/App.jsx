
import NavBar from './components/header/NavBar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <NavBar /> 
      <Outlet />   
    </div>
  )
}
export default App