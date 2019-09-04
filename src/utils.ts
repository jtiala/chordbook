const slugify = (text: string): string =>
  text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text

const slugFromArtistAndTitle = (artist: string, title: string): string =>
  `${slugify(artist)}-${slugify(title)}`;

const countRows = (str: string): number => str.split(/\r\n|\r|\n/).length;

export { slugify, slugFromArtistAndTitle, countRows };
