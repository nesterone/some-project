// 2022-11-09 -> Nov 9, 2022
export function humanReadableDate(str, isShort = true) {
  const date = new Date(str);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: isShort ? "short" : "long",
    day: "numeric",
  });
}
