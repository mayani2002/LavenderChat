import logo from './logo.svg';
import './App.css';

// components
import Messenger from './component/messenger';
import AccountProvider from './context/AccountProvider';
import TemplateProvider from './theme/TemplateProvider';
  
function App() {
  return (
  <TemplateProvider>
    <AccountProvider>
      <Messenger/>
    </AccountProvider>
  </TemplateProvider>
  );
}

export default App;
