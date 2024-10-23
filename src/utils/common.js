export const formateDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };

  /*   const fullDate = new Date(Date.UTC(date)).toLocaleDateString(
    "en-GB",
    options
  ); */
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth() + 1;
  const day = new Date(date).getDate();

  return ` ${day}-${month}-${year}`;
};

export const formatPrice = (price) => {
  return `£${parseFloat(price).toFixed(2)}`;
};

export const truncateHTML = ({ html, maxWords }) => {
  // Create a temporary element to hold the HTML
  var tempElement = document.createElement("div");
  tempElement.innerHTML = html;

  // Get the text content from the element (strips HTML tags)
  var textContent = tempElement.textContent || tempElement.innerText || "";

  // Split the text into words
  var words = textContent.split(/\s+/);

  // Truncate the array to the maximum number of words
  var truncatedWords = words.slice(0, maxWords);

  // Join the truncated words array into a string
  var truncatedText = truncatedWords.join(" ");

  return truncatedText;
};

export const truncateStringByCharacters = (str, maxChars) => {
  // Check if the string needs to be truncated
  if (str.length <= maxChars) {
    return str;
  }

  // Truncate the string to the maximum number of characters and add ellipsis
  const truncatedText = str.slice(0, maxChars) + "...";

  return truncatedText;
};

export function formatDateString(dateString) {
  const date = new Date(dateString);

  // Get year, month, and day parts
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  // Format the date as YYYY-MM-DD
  return `${year}-${month}-${day}`;
}
export const getTextColor = (bgColor) => {
  const hex = bgColor.replace("#", ""); // Remove the '#' if present
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate luminance
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  // If luminance is high, return black; otherwise, return white
  return luminance > 186 ? "#000000" : "#FFFFFF";
};
