import { parseGitHubUrl } from '../services/parceGitHubUrl';

export async function getIssues(baseUrl: string) {
  const { owner, repo } = parseGitHubUrl(baseUrl);

  // URL API GitHub для отримання issues
  const url = `https://api.github.com/repos/${owner}/${repo}/issues`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to fetch issues');
    }
  } catch (error) {
    console.error('Error fetching issues:', error);
    return [];
  }
}


// getIssues(baseUrl).then(issues => {
//   console.log('List of issues:', issues);
// });
