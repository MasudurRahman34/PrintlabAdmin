import React from "react";

const ExportToCsv = ({ combination_data }) => {
  console.log("combination_data", combination_data);

  const handleExportToCsv = () => {
    // handle export to csv here
    const csv = [
      [
        "id",
        "sku",
        "price",
        "combination_string",
        "quantity",
        "calculation_type",
        "increment",
        "max_quantity",
        "min_quantity",
        "per_increment_price",
        "reduction_percentage",
        "quantity_rule",
      ],
      ...combination_data?.data?.map((item) => [
        item.id,
        item.sku,
        item.price,
        item.combination_string,
        item.quantity,
        item.calculation_type,
        item.increment,
        item.max_quantity,
        item.min_quantity,
        item.per_increment_price,
        item.reduction_percentage,
        item.quantity_rule,
      ]),
    ]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "combinations.csv";
    a.click();

    // clean up

    window.URL.revokeObjectURL(url);

    // console.log("csv", csv);
  };

  return (
    <button
      className="px-3 py-2 text-xs text-white border rounded-md bg-primary"
      onClick={handleExportToCsv}
    >
      Export CSV
    </button>
  );
};

export default ExportToCsv;
