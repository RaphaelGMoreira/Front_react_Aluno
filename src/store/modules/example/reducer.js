import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

// eslint-disable-next-line default-param-last
export default (state = initialState, action) => {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      // eslint-disable-next-line
      console.log('Sucesso');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      // eslint-disable-next-line
      console.log('Deu erro');
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      // eslint-disable-next-line
      console.log('Estou fazendo a requisição');
      return state;
    }

    default: {
      return state;
    }
  }
};
