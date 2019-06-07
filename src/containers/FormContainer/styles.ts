import styled from 'styled-components/macro';
import { Grid } from 'styles/primitives';
import colors from 'styles/colors';

export const Wrapper = styled.section`
  padding: 15px 10px;
  background-color: ${colors.WHITE};
`;

export const Title = styled.h3`
  margin: 0 0 10px;
  color: ${colors.DARK};
`;

export const Form = styled.form`
  margin-top: 15px;
`;

export const Description = styled.p`
  margin-bottom: 15px;
  font-size: 12px;
  font-weight: 300;
  line-height: 14px;
  color: ${colors.DARK_LIGHT};
`;

export const CardInputsWrapper = styled(Grid)`
  grid-template-columns: 3fr 100px;
  grid-gap: 10px;
  margin-bottom: 10px;
`;
