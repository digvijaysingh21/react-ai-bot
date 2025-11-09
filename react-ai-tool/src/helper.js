export function checkHeading(str) {
  // Matches strings that start with ** and end with *
  // Example: **This is heading*
  return /^(\*)(\*)(.*)\*$/.test(str);
}

//replace ** from headings

export function replaceHeading(str) {
  // Matches strings that start with ** and end with *
  // Example: **This is heading*
  return str.replace(/^(\*)(\*)|(\*)$/g, "");
}
