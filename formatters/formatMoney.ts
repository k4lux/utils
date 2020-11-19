import formatThousand from "./formatThousand";

function formatMoney(value: string): string {
  let resultString: string | number = Number(
    value.replace(/,/g, "").replace(/\./g, "")
  );

  resultString = String(resultString)
    .padStart(3, "0")
    .replace(/(\d+)(\d{2})/g, "$1,$2");

  return formatThousand(resultString, true);
}

export default formatMoney;
