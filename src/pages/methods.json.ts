import { APIRoute } from 'astro';

// create a quick API route to return xml
export const get: APIRoute = ({ params, request }) => {
  const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
    <Response>
      <Play>https://example.com/song.mp3</Play>
    </Response>`;
  return {
    type: 'xml',
    body: xmlResponse,
  };
};
