export function parseGitHubUrl(url: string) {
  const regex = /https:\/\/github\.com\/([^/]+)\/([^/]+)/;
  const match = url.match(regex);

  if (match) {
    const [, owner, repo] = match;
    return { owner, repo };
  } else {
    throw new Error('Invalid GitHub URL');
  }
}
