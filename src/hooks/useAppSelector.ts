import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../modules/reducers';

export const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
