export function getImageUrl(name) {
  return new URL(`../assets/icons/${name}.svg`, import.meta.url).href
}