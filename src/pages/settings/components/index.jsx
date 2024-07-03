// vendor
import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { MenuItem, TextField } from '@mui/material';

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

export function Label(props) {
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

export const Error = styled.div`
  color: #f44336;
  font-size: 12px;
  margin-top: 4px;
`;

export const InputWithError = ({ name, label, errors, type, onChange, options = [] }) => {
  if (type === 'dropdown') {
    return (
      <>
        <Label isRequired labelBold>
          {label}
        </Label>
        <Field as={TextField} name={name} fullWidth select>
          {options.map((option) => (
            <MenuItem key={option} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Field>
        {errors[name] && <Error>{errors[name]}</Error>}
      </>
    );
  }
  return (
    <>
      <Label isRequired labelBold>
        {label}
      </Label>
      <Field name={`${name}`} as={TextField} fullWidth onChange={onChange} type={type} />
      {errors[name] && <Error>{errors[name]}</Error>}
    </>
  );
};

InputWithError.propTypes = {
  name: PropTypes.string,
  errors: PropTypes.object,
  type: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  label: PropTypes.string,
};
