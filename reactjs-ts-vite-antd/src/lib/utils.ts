export function buildPath(
  path: string,
  query: Record<string, string | number | boolean | undefined | null>
): string {
  const params = new URLSearchParams();

  for (const key in query) {
    const value = query[key];
    if (value !== undefined && value !== null && value !== '') {
      params.append(key, String(value));
    }
  }

  const queryString = params.toString();
  return queryString ? `${path}?${queryString}` : path;
}
