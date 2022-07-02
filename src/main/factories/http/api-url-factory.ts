export const makeApiUrl = (path: string): string => {
  return `${process.env.REACT_API_URL}${path}`
}
