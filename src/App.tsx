import React from 'react';
import { Provider as StoreProvider } from 'react-redux'
import { FormContainer } from 'containers';
import store from 'store';

import * as S from './styles';

const App: React.FC = () => {
  return (
    <>
      <S.Normalize />
      <S.GlobalStyle />

      <StoreProvider store={store}>
        <S.Container>
          <S.Helper>
            <FormContainer />
          </S.Helper>
        </S.Container>
      </StoreProvider>
    </>
  );
};

export default App;
