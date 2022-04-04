export const buildPath = (url: string, id: string | number) => `${url}/${id}`;

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