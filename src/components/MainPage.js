import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getChart } from '../redux/ChartsSlice';

const MainPage = () => {
  const charts = useSelector((state) => state.charts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (charts.length === 0) {
      dispatch(getChart());
    }
  }, []);
};
export default MainPage;
