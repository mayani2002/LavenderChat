import logo from './logo.svg';
import './App.css';
import Messenger from './component/messenger';
import AccountProvider from './context/AccountProvider';
  
function App() {
  return (
  <AccountProvider>
    <Messenger/>
  </AccountProvider>
  );
}

export default App;
