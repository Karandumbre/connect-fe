// vendor
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { TextField } from '@mui/material';

const LabelStyled = styled.label`
  display: ${(props) => (props.subTextAlignRightToLabel ? 'flex' : 'inline-block')};
  align-items: center;
  font-weight: ${(props) => (props.labelBold ? 'bold' : '500')};
  font-size: 14px;
  line-height: 22px;
  color: #6266a7;

  margin-bottom: 8px;

  ${(props) =>
    props.isRequired &&
    `
    ::after {
      content: '*';
      color: #6266A7;
    }
  `}
`;

function Label(props) {
  const {
    isRequired,
    children,
    htmlFor = '',
    labelBold = false,
    subTextAlignRightToLabel = true,
    helper,
  } = props;
  return (
    <LabelStyled
      isRequired={isRequired}
      htmlFor={htmlFor}
      labelBold={labelBold}
      subTextAlignRightToLabel={subTextAlignRightToLabel}
    >
      {children}
      {helper}
    </LabelStyled>
  );
}

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
  isRequired: PropTypes.bool,
  labelBold: PropTypes.bool,
  subTextAlignRightToLabel: PropTypes.bool,
  helper: PropTypes.node,
};

export { Label };

export const CustomTextField = styled(TextField)((props) => ({
  '& .MuiInputBase-input': {
    padding: '9px 12px',
    fontSize: '14px',
  },
  '& .MuiInputBase-formControl': {
    padding: '0',
  },
  '& input': {
    padding: props.select ? '0' : '9px 12px', // Corrected the condition application
    fontSize: '14px',
  },
}));
