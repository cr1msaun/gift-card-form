import styled from 'styled-components/macro';
import { CheckIcon } from 'icons';
import { Row } from 'styles/primitives';
import colors from 'styles/colors';

const FAKE_CHECKBOX_SIZE = 14;
const LABEL_LEFT_MARGIN = 8;

export const Wrapper = styled(Row)`
  position: relative;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 12px;
  line-height: 14px;
  margin-left: -${FAKE_CHECKBOX_SIZE}px;
  padding-left: ${FAKE_CHECKBOX_SIZE + LABEL_LEFT_MARGIN}px;
`;

export const FakeCheckbox = styled.div`
  flex-shrink: 0;
  width: ${FAKE_CHECKBOX_SIZE}px;
  height: ${FAKE_CHECKBOX_SIZE}px;
  border: 1px solid ${colors.GREY};
  background-color: transparent;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, .25);
`;

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  position: absolute;
  left: -9999px;

  &:checked ~ ${FakeCheckbox} {
    border-color: ${colors.GREEN};
    background: url(${CheckIcon}) no-repeat center top ${colors.GREEN};
  }
`;
