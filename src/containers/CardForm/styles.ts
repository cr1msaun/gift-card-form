import styled from 'styled-components/macro';
import { Grid, Row } from 'styles/primitives';
import colors from 'styles/colors';

export const Form = styled.form`
  margin-top: 15px;
  font-size: 12px;
  font-weight: 300;
  line-height: 14px;
`;

export const Description = styled.p`
  margin-bottom: 15px;
  color: ${colors.DARK_LIGHT};
`;

export const CardInputsWrapper = styled(Grid)`
  grid-template-columns: 3fr 100px;
  grid-gap: 10px;
  margin-bottom: 10px;
`;

export const Footer = styled(Row)`
  align-items: center;
`;

export const Error = styled.div`
  margin-left: 10px;
  color: ${colors.RED};
`;
