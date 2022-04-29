import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react';

type ReturnTypes<T> = [T, (e: ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<T>>];

const useInput = <T>(initialValue: T): ReturnTypes<T> => {
  const [value, setValue] = useState<T>(initialValue);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handler = useCallback((e: any) => setValue(e.currentTarget.value), []);

  return [value, handler, setValue];
};

export default useInput;
