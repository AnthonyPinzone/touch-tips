export function calculatePercentage(total, max) {
  return ((Number(total) / Number(max)) * 100).toFixed(2) + "%";
}

export function calculateTotal(values) {
  return values.reduce((a, b) => Number(a) + Number(b), 0).toFixed(2);
}

export function calculateAverage(values) {
  return (
    values.reduce((a, b) => Number(a) + Number(b), 0) / values.length
  ).toFixed(2);
}

export function calculateLastFour(values) {
  const last4 = values.slice(values.length - 4, values.length);
  return calculateAverage(last4);
}
