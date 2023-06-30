import { AxiosResponse } from 'axios';
import api from './rootService';
import { UrlServicePaths } from './paths/urlServicePaths';

export const urlService = {
  encode(url: string): Promise<string> {
    return api.get(UrlServicePaths.ENCODE, { params: { url } })
      .then((res: AxiosResponse<{ shortUrl: string }>) => res.data.shortUrl);
  },
  decode(shortUrl: string): Promise<string> {
    return api.get(UrlServicePaths.DECODE, { params: { shortUrl } })
      .then((res: AxiosResponse<{ originalUrl: string }>) => res.data.originalUrl);
  },
};
