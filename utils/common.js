import i18next from '../i18n'

export const routerPushWithLang = (router, path) => {
  const query = {}
  if (router.query.lng) {
    query['lng'] = router.query.lng
  }
  router.push({
    pathname: path,
    query,
  })
}

export const updateLanguage = (ctx) => {
  const defaultLng = 'en-US' // this can come from backend based on user profile
  const lng = ctx.query.lng || defaultLng

  i18next.changeLanguage(lng)
}
