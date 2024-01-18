const byteSize = (str) => {
  // Use the TextEncoder API to encode the string into bytes
  const encoder = new TextEncoder();
  const bytes = encoder.encode(str);

  // Return the size of the bytes array
  return bytes.length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
