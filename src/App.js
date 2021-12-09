import './assets/styles/app.less';
import {Provider} from 'react-redux'
import configureStore from "./redux/configureStore";
import Router from './routes'

const store = configureStore();

const App = () => (<>
        <Provider store={store}>
           <Router/>
        </Provider>
    </>
);

export default App;
