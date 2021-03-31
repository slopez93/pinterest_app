import {useSelector, useDispatch} from 'react-redux';
import {isLoadingSelector} from '@Store/app/selectors';
import {setIsLoading, setIsNotLoading} from '@Store/app/actions';

type ReturnType = [boolean, () => void, () => void];

function useIsLoading(): ReturnType {
  const dispatch = useDispatch();
  const isLoading: boolean = useSelector(isLoadingSelector);

  const showLoading = () => dispatch(setIsLoading());

  const hideLoading = () => dispatch(setIsNotLoading());

  return [isLoading, showLoading, hideLoading];
}

export default useIsLoading;
