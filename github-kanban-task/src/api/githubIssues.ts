// import { Issue } from '../types/Issue';
// import { parseGitHubUrl } from '../services/parceGitHubUrl';

// export const getAllIssues = (url: string) => {
// const { owner, repo } = parseGitHubUrl(url);

// const API_URL = `https://api.github.com/repos/${owner}/${repo}/issues`;

// const loadIssues = (): Promise<Issue[]> =>
//   fetch(API_URL).then((response) => {
//     if (!response.ok) {
//       throw new Error('Failed to fetch issues from github');
//     }
//     return response.json();
//   })

//   return loadIssues;
// }
