import React, { FC, useCallback, useState } from 'react';
import styled from 'styled-components';
import { FormHead } from './atoms/FormHead';
import { InputSet } from './atoms/InputSet';
import { Button } from './atoms/Button';
import { useUrlShortener } from '../hooks/useUrlShortener';
import { ErrorNotification } from './atoms/ErrorNotification';

const appTitle = 'Demo URL Shortener Service';
const appDescription = `The URL Shortener is a web application designed 
  to shorten long URLs into concise and easy-to-share links.`;

const Section = styled.div`
  padding: 24px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: end;
`;

const ButtonsSection = styled.div`
  display: flex;
  justify-content: end;
  gap: 16px;
`;

const Form = styled.div`
    margin: auto;
    max-width: 800px;
    border: 1px solid #F6F4FF;
`;

export const EncoderFrom: FC = () => {
  const {
    searchUrl, setSearchUrl, transformedUrl, isError, errorMessage, decodeUrl, encodeUrl,
  } = useUrlShortener();

  const copyResult = useCallback(() => {
    navigator.clipboard.writeText(transformedUrl);
  }, [transformedUrl]);

  return (
    <Form role="form" aria-label={appDescription}>
      <FormHead description={appDescription} title={appTitle} />
      <Section>
        <InputSet title="URL" onChange={setSearchUrl} value={searchUrl} />
        <ButtonsSection>
          <Button onClick={() => encodeUrl()}>Encode</Button>
          <Button onClick={() => decodeUrl()}>Decode</Button>
        </ButtonsSection>
      </Section>
      {transformedUrl && !isError && (
      <Section>
        <InputSet disabled title="Result" value={transformedUrl} />
        <ButtonsSection>
          <Button onClick={copyResult}>Copy</Button>
        </ButtonsSection>
      </Section>
      )}
      {isError && <ErrorNotification>{errorMessage}</ErrorNotification>}
    </Form>
  );
};
