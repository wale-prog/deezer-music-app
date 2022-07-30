import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/index';
import MainPage from '../components/MainPage';

describe('Test the Main page renders as expected', () => {
  it('Main page is rendered', () => {
    const mainPage = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <MainPage />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(mainPage).toMatchSnapshot();
  });
});
