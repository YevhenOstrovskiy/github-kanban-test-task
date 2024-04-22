export async function getIssues(owner: string, repo: string) {

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
