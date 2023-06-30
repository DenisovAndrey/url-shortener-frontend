import { useCallback, useState } from 'react';
import { AxiosError } from 'axios';
import { urlService } from '../services/urlService';

export const useUrlShortener = () => {
  const [searchUrl, setSearchUrl] = useState('');
  const [transformedUrl, setTransformedUrl] = useState('');

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleError = useCallback((error: AxiosError) => {
    setTransformedUrl('');
    setIsError(true);
    setErrorMessage(error.message);
  }, []);

  const encodeUrl = useCallback(() => {
    setIsError(false);
    urlService.encode(searchUrl)
      .then(setTransformedUrl)
      .catch(handleError);
  }, [handleError, searchUrl]);
  const decodeUrl = useCallback(() => {
    setIsError(false);
    urlService.decode(searchUrl)
      .then(setTransformedUrl)
      .catch(handleError);
  }, [handleError, searchUrl]);

  return {
    searchUrl, setSearchUrl, transformedUrl, isError, errorMessage, decodeUrl, encodeUrl,
  };
};
