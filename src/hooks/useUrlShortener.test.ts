import { renderHook, act, waitFor } from '@testing-library/react';
import { useUrlShortener } from './useUrlShortener';
import { urlService as urlServiceOriginal } from '../services/urlService';

jest.mock('../services/urlService');
const urlService = urlServiceOriginal as jest.Mocked<typeof urlServiceOriginal>;

const encodedUrl = 'http://short.dev/abc123';
const originalUrl = 'https://en.wikipedia.org/wiki/Computer';

describe('useUrlShortener', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should handle encoding URL', async () => {
    const encode = jest.fn().mockResolvedValueOnce(encodedUrl);
    urlService.encode.mockImplementationOnce(encode);

    const { result } = renderHook(() => useUrlShortener());

    act(() => {
      result.current.setSearchUrl(originalUrl);
    });
    act(() => {
      result.current.encodeUrl();
    });

    expect(encode).toHaveBeenCalledWith(originalUrl);
    await waitFor(() => {
      expect(result.current.transformedUrl).toBe(encodedUrl);
    });
    expect(result.current.isError).toBe(false);
  });

  it('should handle decoding URL', async () => {
    const decode = jest.fn().mockResolvedValueOnce(originalUrl);
    urlService.decode.mockImplementationOnce(decode);

    const { result } = renderHook(() => useUrlShortener());

    act(() => {
      result.current.setSearchUrl(encodedUrl);
    });
    act(() => {
      result.current.decodeUrl();
    });

    expect(decode).toHaveBeenCalledWith(encodedUrl);
    await waitFor(() => {
      expect(result.current.transformedUrl).toBe(originalUrl);
    });
    expect(result.current.isError).toBe(false);
  });

  it('should handle API error during encoding', async () => {
    const errorMessage = 'URL not found';
    const encode = jest.fn().mockRejectedValueOnce(new Error(errorMessage));
    urlService.encode.mockImplementationOnce(encode);

    const { result } = renderHook(() => useUrlShortener());

    act(() => {
      result.current.setSearchUrl(originalUrl);
    });
    act(() => {
      result.current.encodeUrl();
    });

    expect(encode).toHaveBeenCalledWith(originalUrl);
    await waitFor(() => {
      expect(result.current.transformedUrl).toBe('');
      expect(result.current.isError).toBe(true);
    });

    expect(result.current.errorMessage).toBe(errorMessage);
  });

  it('should handle API error during decoding', async () => {
    const errorMessage = 'Invalid short URL';
    const decode = jest.fn().mockRejectedValueOnce(new Error(errorMessage));
    urlService.decode.mockImplementationOnce(decode);

    const { result } = renderHook(() => useUrlShortener());

    act(() => {
      result.current.setSearchUrl(encodedUrl);
    });
    act(() => {
      result.current.decodeUrl();
    });

    expect(decode).toHaveBeenCalledWith(encodedUrl);
    await waitFor(() => {
      expect(result.current.transformedUrl).toBe('');
      expect(result.current.isError).toBe(true);
    });
    expect(result.current.errorMessage).toBe(errorMessage);
  });
});
