export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[\u200B-\u200D\uFEFF\u00A0\u202F]/g, ""); // removes invisible spaces
}
