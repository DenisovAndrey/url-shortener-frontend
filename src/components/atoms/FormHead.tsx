import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 24px;
  background: #F6F4FF;
  font-family: 'Inter', sans-serif;
  color: #667085;
`;
const Title = styled.h2`
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
`;

const Description = styled.p`
  margin: 0;
  line-height: 150%;
  font-size: 14px;
`;

export const FormHead: FC<{ title: string, description: string }> = ({
  title,
  description,
}) => (
  <Container>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Container>
);
