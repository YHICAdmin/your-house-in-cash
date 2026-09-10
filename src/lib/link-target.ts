// Internal site navigation uses relative URLs; web URLs identify external links.
export function getExternalLinkProps(href: string) {
  return /^(https?:)?\/\//i.test(href)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
}
