export function calculatePercentage(total, max) {
  return ((Number(total) / Number(max)) * 100).toFixed(2) + "%";
}

export function calculateAverage(values) {
  return (
    values.reduce((a, b) => Number(a) + Number(b), 0) / values.length
  ).toFixed(2);
}
