import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import rootReducer from './reducers';
import rootSaga from '../sagas';

class StoreManager {
  private configure = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

    sagaMiddleware.run(rootSaga);
    return store;
  };

  public store = this.configure();

  public getCurrentTheme = () => this.store.getState().appReducer.appTheme;

  public dispatch = (action: { type: string; payload?: any }) => {
    this.store.dispatch(action);
  };
}

const storeManager = new StoreManager();

export default storeManager;
