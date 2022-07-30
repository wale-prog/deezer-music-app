import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/index';
import Header from '../components/Header';

it('Header is rendered', () => {
  const detailPage = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(detailPage).toMatchSnapshot();
});
