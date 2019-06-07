import styled from 'styled-components/macro';
import { Row, Column } from 'styles/primitives';
import colors from 'styles/colors';

export const Wrapper = styled(Row)`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  font-size: 12px;
  line-height: 14px;
  background-color: ${colors.LIGHT};
  color: ${colors.DARK};
`;

export const Number = styled.div``;
export const Details = styled(Column)`
  padding-right: 10px;
`;

export const Title = styled.h4`
  margin: 0 0 5px;
`;

export const Discount = styled.div`
  flex-shrink: 0;
  font-weight: bold;
  white-space: nowrap;
`;
