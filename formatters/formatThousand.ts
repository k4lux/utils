function formatThousand(value: any, hasComma = false) {
  const resultString = String(value)
    .replace(/\./g, "")
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

  if (hasComma) {
    const commaIndex = resultString.indexOf(",");

    if (commaIndex === -1) {
      return resultString;
    }

    const commaSubstring = resultString.slice(commaIndex);

    return resultString.replace(
      commaSubstring,
      commaSubstring.replace(/\./g, "")
    );
  }

  return resultString.replace(/\,/, "");
}

export default formatThousand;
