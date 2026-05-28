export function ChartLine({ values }: { values: number[] }) {
  const max = Math.max(1, ...values);
  const points = values.map((value, index) => `${(index / Math.max(1, values.length - 1)) * 100},${100 - (value / max) * 100}`).join(" ");
  return (
    <svg aria-label="Line chart" role="img" viewBox="0 0 100 100" style={{ width: "100%", height: 160 }}>
      <polyline fill="none" points={points} stroke="var(--accent-primary)" strokeWidth="3" />
    </svg>
  );
}
