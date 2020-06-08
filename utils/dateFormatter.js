import {DOT, SPACE, TIME_DELIMITER} from "./constants";

export const formatToDateTime = (wholeDate) => {
  const dateWithoutMs = wholeDate.substring(0, wholeDate.indexOf(DOT));
  return dateWithoutMs.replace(TIME_DELIMITER, SPACE);
};
