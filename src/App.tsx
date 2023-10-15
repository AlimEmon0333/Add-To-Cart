import './App.css';
import AppRouter from './config/appRouter';
import { Provider } from 'react-redux';
import store from './config/redux/store';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
