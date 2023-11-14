/**
 *
 * @param {string} title
 * @input "This is a title"
 * @output "This_is_a_title"
 */
export const formatUrlTitle = (title) => {
  return title.replace(/\s+/g, "_");
};
