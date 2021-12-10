import {Provider} from 'react-redux'
import configureStore from "./redux/configureStore";
import Router from './routes'
import './assets/styles/styles.less';

const store = configureStore();

const App = () => (<>
        <Provider store={store}>
            <Router/>
        </Provider>
    </>
);

export default App;
