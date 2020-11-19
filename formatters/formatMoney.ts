import formatThousand from "./formatThousand";

function formatMoney(value: string) {
  const onlyNumbers = value.replace(/,/g, "").replace(/\./g, "");
  const leftZerosRemoved = String(Number(onlyNumbers));
  const resultString = leftZerosRemoved
    .padStart(3, "0")
    .replace(/(\d+)(\d{2})/g, "$1,$2");

  return formatThousand(resultString, true);
}

export default formatMoney;
