import React, { FC } from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #344054;
  margin-bottom: 6px;
`;

const Input = styled.input`
  padding: 10px 14px;
  border: 1px solid #D0D5DD;
  color: #101828;
  font-size: 16px;
  border-radius: 8px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

interface InputSetProps {
  value: string,
  onChange?: (v: string) => void
  title?: string
  disabled?: boolean
}

export const InputSet: FC<InputSetProps> = ({
  value, onChange = (v) => {}, title, disabled = false,
}) => (
  <Label>
    {title && <Title>{title}</Title>}
    <Input area-label={title} disabled={disabled} value={value} type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)} />
  </Label>
);
