export const HighlightText = (text: string, search: string) => {
  if (!search) return text;
  const regex = new RegExp(`(${search})`, "gi");
  return text.split(regex).map((part, idx) =>
    part.toLowerCase() === search.toLowerCase() ? (
      <mark key={idx} style={{ backgroundColor: "#ffe58f" }}>
        {part}
      </mark>
    ) : (
      part
    )
  );
};
