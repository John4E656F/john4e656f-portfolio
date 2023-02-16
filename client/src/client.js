import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '553sctm1',
  dataset: 'production',
  apiVersion: '2023-02-15',
  useCdn: true,
  token:
    'skbjUxuxC5M5nrezUUIYwNLZZVMVfgNcMNRYAMfUlBq18D60kkFPOxthxIOamQi8R7trtzcQMrbxJT0jjrlyCNAh0xTcRIHDB8x55oU2Ssq2tBS9LLyDz3Rn0YrzVBLJTZafHhcFsJ1grrzq0qsaZzMsoWbNIHQQY9viJw6NsL2113L3gvEp',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
