import { createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';


const defaultState = { count: 0 };

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f,
);

const store = createStore(rootReducer, defaultState, enhancers);

//adds hot reload for changes to reducer
if(module.hot){
    module.hot.accept('./reducers', ()=>{
        const nextRootReducer = require(`./reducers/index`).default;
        store.replaceReducer(nextRootReducer);
    });
};

export default store;

