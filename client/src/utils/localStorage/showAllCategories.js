import { getAllItems } from './getAllItems'
import { serveDefault } from './serveDefault'

function categoriesToShow() {
  const storedCategories = getAllItems('Categories') || serveDefault('Categories')
  const catToShow = storedCategories
    .map((item) => {
      if (item.name !== 'Uncategorized') return item
    })
    .filter((item) => item !== undefined)

  return catToShow
}

export { categoriesToShow }
