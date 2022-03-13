import './App.css';

// components
import Messenger from './component/messenger';
import AccountProvider from './context/AccountProvider';
import UserProvider from './context/UserProvider';
import TemplateProvider from './theme/TemplateProvider';
  
function App() {
  return (
    <>
      <TemplateProvider>
        <UserProvider>
          <AccountProvider>
            <Messenger/>
          </AccountProvider>
        </UserProvider>
      </TemplateProvider>
    </>
  );
}

export default App;
