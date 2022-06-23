export type HttpResponse<T> = {
  statusCode: HttpStatusCode
  data?: T
}

export enum HttpStatusCode {
  ok = 200,
  badRequest = 400,
  unathorized = 401,
  notFound = 404,
  noContent = 204,
  serverError = 500
};
