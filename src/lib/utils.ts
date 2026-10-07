/**
 * Utility functions for environment-aware asset path resolution and string manipulation.
 */

/**
 * Resolves an asset path with the optional GitHub Pages basePath prefix.
 * Ensures compatibility across both local development and subpath deployments.
 *
 * @param path The relative asset path (e.g., '/images/Logo-Amir.png')
 * @returns The fully qualified asset path
 */
export function getAssetPath(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
