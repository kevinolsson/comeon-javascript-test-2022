export const paths = {
  index: {
    path: '/'
  },
  games: {
    path: 'games',
    gameLauncher: {
      path: ':gameId'
    }
  },
  pageNotFound: {
    path: '*'
  }
}