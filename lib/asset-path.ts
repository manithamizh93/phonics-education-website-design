const BASE_PATH =
  process.env.NODE_ENV === 'production'
    ? '/phonics-education-website-design'
    : '';

export function assetPath(path: string) {
  return `${BASE_PATH}${path.startsWith('/') ? path : `/${path}`}`;
}
