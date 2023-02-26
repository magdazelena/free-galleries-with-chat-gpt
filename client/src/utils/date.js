export function checkIfDateIsOlderThan30days(initialDate) {
  const prevDate = new Date(initialDate);
  const now = new Date();

  const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;

  const timeDiffInMs = now.getTime() - prevDate.getTime();

  return timeDiffInMs >= thirtyDaysInMs;
}
