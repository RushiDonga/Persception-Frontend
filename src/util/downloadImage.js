export const downloadImage = (base64Data, fileName = "image.png") => {
  const hasPrefix = base64Data.startsWith("data:image");
  const data = hasPrefix ? base64Data : `data:image/png;base64,${base64Data}`;

  const link = document.createElement("a");
  link.href = data;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
