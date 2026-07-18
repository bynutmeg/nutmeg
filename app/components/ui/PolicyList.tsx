interface PolicyListProps {
  items: string[];
}

export default function PolicyList({
  items,
}: PolicyListProps) {
  return (
    <ul className="list-disc pl-6 space-y-2">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}