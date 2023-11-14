import {
  formatDistanceStrict,
  format,
  isWithinInterval,
  subDays,
  subHours,
} from "date-fns";

/**
 *
 * @param {Date} dateString
 * @input 2022-09-01T23:55:43.271Z
 * @description  if it less than 24 hours return X hours ago, if it less than 7 days return X days ago,
 * if it is more than 7 days return in the format dd-MM-yyyy
 * @returns "1 day ago"
 */
export const displayDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();

  if (isWithinInterval(date, { start: subHours(now, 24), end: now })) {
    return formatDistanceStrict(date, now) + " ago";
  } else if (isWithinInterval(date, { start: subDays(now, 7), end: now })) {
    return formatDistanceStrict(date, now) + " ago";
  } else {
    return format(date, "dd-MMMM-yyyy");
  }
};
