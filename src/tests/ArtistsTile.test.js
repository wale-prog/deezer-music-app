import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/index';
import DetailPage from '../components/DetailPage';

it('Header is rendered', () => {
  const detail = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <DetailPage />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(detail).toMatchSnapshot();
});
