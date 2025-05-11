export default function getImageDimensions(type) {
    switch (type.toLowerCase()) {
      case "landscape":
        return { width: 1152, height: 896 };
      case "square":
        return { width: 1024, height: 1024 };
      case "portrait":
        return { width: 896, height: 1152 };
      default:
        return { width: 1152, height: 896 };
    }
  };