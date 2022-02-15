import createCache from '@emotion/cache';
//CSS
export default function createEmotionCache() {
    return createCache({ key: 'css', prepend: true });
}