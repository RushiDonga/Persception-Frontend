export const downloadImage = (base64Data, fileName = "image.png") => {
  const link = document.createElement("a");
  link.href = base64Data;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};