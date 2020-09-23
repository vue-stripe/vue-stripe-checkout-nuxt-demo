const LANG = 'en_US';
const TYPE = 'website';
// TODO: Replace this
const SITE_NAME = process.env.SITE_NAME;
const URL = `https://${SITE_NAME}`;

export default ({ title, description, socialBanner }) => {
  return {
    title,
    description,
    meta: [
      // normal meta
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
      // facebook meta
      {
        hid: 'og:locale',
        name: 'og:locale',
        content: LANG,
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: TYPE,
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: URL,
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: title,
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: SITE_NAME,
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: description,
      },
      {
        hid: 'image',
        name: 'og:image',
        content: socialBanner,
      },
      // twitter meta
    ],
  };
};
