import styled from 'styled-components/macro';
import colors from 'styles/colors';

interface Props {
  error: boolean;
}

export const Input = styled.input<Props>`
  padding: 15px 10px 15px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.error ? colors.RED : colors.GREY};
  font-family: 'Work Sans', sans-serif;
  font-size: 12px;
  line-height: 14px;
  color: ${colors.DARK};
  transition: .3s border-color;
`;
