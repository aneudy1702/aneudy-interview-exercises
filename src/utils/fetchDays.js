import { buildFakeRequest } from "./fakeFetchRequest";

const daysArray = [
  {
    day: "Mon",
    high: "67",
    low: "43"
  },
  {
    day: "Tue",
    high: "60",
    low: "23"
  },
  {
    day: "Wed",
    high: "77",
    low: "53"
  },
  {
    day: "Thur",
    high: "47",
    low: "43"
  },
  {
    day: "Fri",
    high: "37",
    low: "13"
  }
];

export const fetchDays = buildFakeRequest({
  data: daysArray
});
