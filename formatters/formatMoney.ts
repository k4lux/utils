function formatMoney(value: string): string {
  let resultString = Number(value.replace(/,/g, "").replace(/\./g, ""));

  return String(resultString)
    .padStart(3, "0")
    .replace(/(\d+)(\d{2})/g, "$1,$2");
}

export default formatMoney;
