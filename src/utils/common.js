export const formateDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };

  const fullDate = new Date(date).toLocaleDateString("en-GB", options);
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth();
  const day = new Date(date).getDate();

  return `${fullDate}, ${year}-${month}-${day}`;
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
