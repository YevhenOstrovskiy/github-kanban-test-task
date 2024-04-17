export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const currentDate = new Date();
  const differenceInTime = currentDate.getTime() - date.getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
  const differenceInMonths = Math.floor(differenceInDays / 30);
  const differenceInYears = Math.floor(differenceInDays / 365);

  if (differenceInYears >= 1) {
    if (differenceInYears === 1) {
      return 'opened 1 year ago';
    } else {
      return `opened ${differenceInYears} years ago`;
    }
  } else if (differenceInMonths >= 1) {
    return `opened ${differenceInMonths} months ago`;
  } else if (differenceInDays === 1) {
    return 'opened 1 day ago';
  } else if (differenceInDays === 0) {
  return 'opened today';
} else {
    return `opened ${differenceInDays} days ago`;
  }
}
