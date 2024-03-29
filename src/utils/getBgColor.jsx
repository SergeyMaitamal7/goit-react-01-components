
export const getBgColor = variant => {
    switch (variant) {
      case ".docx":
        return "blue";
      case ".pdf":
        return "green";
      case ".mp3":
        return "red";
      case ".psd":
        return "orange";
      default:
        throw new Error(`Unsupported variant prop value - ${variant}`);
    }
  };