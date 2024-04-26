import { Provider } from 'react-redux';
import store from './utils/store';

import './App.css';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <Provider store={store}>
       <div className="">
      <Header />
      <Body />
      {/* 
        header
        body
          - sidebar 
            - menuItems
            
          - main container
            - button list 
            - videoContainer
            - videoCard
      */}
    </div>
    </Provider>
   
  );
}

export default App;
