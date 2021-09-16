export function calculatePercentage(total, max) {
  return ((Number(total) / Number(max)) * 100).toFixed(2) + "%";
}
