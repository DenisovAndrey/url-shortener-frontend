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

interface InputSetProps {
  value: string,
  onChange: (v: string) => void
  title?: string
}

export const InputSet: FC<InputSetProps> = ({ value, onChange, title }) => (
  <label>
    {title && <Title>{title}</Title>}
    <Input value={value} type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)} />
  </label>
);
