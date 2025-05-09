export function buildPath(path: string, query: Record<string, any>): string {
  const params = new URLSearchParams();

  for (const key in query) {
    const value = query[key];
    if (value !== undefined && value !== null && value !== '') {
      params.append(key, value);
    }
  }

  const queryString = params.toString();
  return queryString ? `${path}?${queryString}` : path;
}
