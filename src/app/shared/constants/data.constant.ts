import { ChartDataset } from "chart.js";

export const BEST_SELLING_SKU = [
  {
    name: "iPhone 12",
    price: 14000000,
    sold: 102,
  },
  {
    name: "Samsung Galaxy A52",
    price: 4999000,
    sold: 81,
  },
  {
    name: "Xiaomi Redmi Note 10",
    price: 3499000,
    sold: 68,
  },
  {
    name: "Oppo Reno 5",
    price: 4999000,
    sold: 52,
  },
  {
    name: "iPhone SE 2020",
    price: 7990000,
    sold: 49,
  },
];

export const TOP_COMPETITOR_SKU = [
  {
    name: "iPhone 12",
    price: 14000000,
    sold: 99,
  },
  {
    name: "iPhone SE 2020",
    price: 7990000,
    sold: 83,
  },
  {
    name: "Samsung Galaxy A52",
    price: 4999000,
    sold: 77,
  },

  {
    name: "Oppo Reno 5",
    price: 4999000,
    sold: 41,
  },
  {
    name: "Xiaomi Redmi Note 10",
    price: 3499000,
    sold: 39,
  },
];

export const AVERAGE_PURCHASE_VALUE: { [key: number]: ChartDataset[] } = {
  1: [
    {
      label: "Gross",
      data: [280, 210, 220, 190, 230, 210, 260],
      backgroundColor: "#37B04C",
    },
    {
      label: "Nett",
      data: [260, 200, 210, 150, 210, 190, 250],
      backgroundColor: "#289E45",
    },
    {
      label: "Average Purchase Value",
      data: [240, 180, 190, 130, 190, 170, 230],
      backgroundColor: "#7AE28C",
    },
    {
      label: "Unit per Transaction",
      data: [6.1, 5.1, 6.23, 5.98, 7.1, 4.99, 7.29],
      backgroundColor: "#707070",
    },
  ],
  3: [
    {
      label: "Gross",
      data: [2400, 2500, 1800, 2300, 1900, 2500, 2200],
      backgroundColor: "#37B04C",
    },
    {
      label: "Nett",
      data: [2200, 2400, 1700, 1900, 1700, 2300, 2100],
      backgroundColor: "#289E45",
    },
    {
      label: "Average Purchase Value",
      data: [1900, 2200, 1500, 1700, 1500, 2100, 1900],
      backgroundColor: "#7AE28C",
    },
    {
      label: "Unit per Transaction",
      data: [7.1, 6.1, 7.23, 6.98, 8.1, 5.99, 8.29],
      backgroundColor: "#707070",
    },
  ],
  6: [
    {
      label: "Gross",
      data: [26000, 23000, 20000, 21000, 21000, 23000, 24000],
      backgroundColor: "#37B04C",
    },
    {
      label: "Nett",
      data: [24000, 22000, 19000, 17000, 19000, 21000, 23000],
      backgroundColor: "#289E45",
    },
    {
      label: "Average Purchase Value",
      data: [22000, 20000, 17000, 15000, 17000, 19000, 21000],
      backgroundColor: "#7AE28C",
    },
    {
      label: "Unit per Transaction",
      data: [8.1, 7.1, 8.23, 7.98, 9.1, 6.99, 9.29],
      backgroundColor: "#707070",
    },
  ],
};
