import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  h1 {
    margin-bottom: 20px;
  }
  input {
    margin-bottom: 20px;
    height: 40px;
    padding: 0 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
`;

export const NovoUsuario = styled(Link)`
  padding-left: 65%;
  button {
    background: ${colors.criarUsuarioColor};
    color: ${colors.primaryDarkColor};
  }
`;
