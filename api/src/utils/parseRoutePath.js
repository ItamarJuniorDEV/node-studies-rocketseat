export function parseRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g;

  const params = String(path).replace(
    routeParametersRegex,
    "(?<$1>[a-z0-9_]+)"
  );

  const pathRegex = new RegExp(`${params}(\\?(.*))?$`);

  return pathRegex;
}
