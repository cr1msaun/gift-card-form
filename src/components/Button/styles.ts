import styled from 'styled-components/macro';
import colors from 'styles/colors';

export const Button = styled.button`
  min-width: 140px;
  min-height: 45px;
  padding: 15px 10px;
  border: 0;
  font-size: 12px;
  font-weight: bold;
  line-height: 14px;
  text-align: center;
  background-color: ${colors.DARK};
  color: ${colors.WHITE};
  text-transform: uppercase;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;
