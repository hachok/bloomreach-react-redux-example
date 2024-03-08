/*
 * Copyright 2019-2023 Bloomreach
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { StrictMode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { BrxApp } from './components/BrxApp';
import { increment } from './redux/counterSlice';

export default function App(): JSX.Element {
  const dispatch = useDispatch();
  const { count: stateCount } = useSelector((state: RootState) => state.counter);

  const [counter1, setCounter1] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCounter1(1);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleClick = (): void => {
    dispatch(increment());
  };

  return (
    <StrictMode>

      Parent component

      Counter1:
      {' '}
      {counter1}

      <button type="button" onClick={handleClick}>
        Increment counter inside Banner
      </button>

      Counter from Redux state:
      {' '}
      {stateCount}

      <BrxApp />

    </StrictMode>
  );
}
