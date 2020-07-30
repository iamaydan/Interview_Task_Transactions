import p1 from "./assets/images/p1.jpeg";
import p2 from "./assets/images/p2.jpg";
import p3 from "./assets/images/p3.jpg";

export const DUMMY = [
  {
    label: "Current week",
    percentage: 64,
    color: "#80e1ae",
    users: [
      {
        uri: p1,
        name: "Ada Lovelace",
        amount: 1300.5,
        date: "30 July 20",
        type: "Debt",
        payWith: "Credit Card",
      },
      {
        uri: p2,
        name: "Mark Hopper",
        amount: 780.5,
        date: "28 July 20",
        type: "Debt",
        payWith: "Credit Card",
      },
      {
        uri: p3,
        name: "Margaret Hamilton",
        amount: 240.5,
        date: "27 July 20",
        type: "Debt",
      },
    ],
  },
  {
    label: "Last week",
    percentage: 40,
    color: "#f8606a",
    users: [
      {
        uri: p1,
        name: "Ada Lovelace",
        amount: 250.5,
        date: "25 July 20",
        type: "Debt",
        payWith: "Credit Card",
      },
      {
        uri: p2,
        name: "Mark Hopper",
        amount: 180.5,
        date: "24 July 20",
        type: "Debt",
        payWith: "Credit Card",
      },
      {
        uri: p3,
        name: "Margaret Hamilton",
        amount: 490.5,
        date: "20 July 20",
        type: "Debt",
      },
    ],
  },
  {
    label: "Last month",
    percentage: 90,
    color: "#606af9",
    users: [
      {
        uri: p1,
        name: "Ada Lovelace",
        amount: 8200.5,
        date: "30 June 20",
        type: "Debt",
        payWith: "Credit Card",
      },
      {
        uri: p2,
        name: "Mark Hopper",
        amount: 17560.5,
        date: "18 June 20",
        type: "Debt",
        payWith: "Credit Card",
      },
      {
        uri: p3,
        name: "Margaret Hamilton",
        amount: 170.5,
        date: "3 June 20",
        type: "Debt",
        payWith: "Credit Card",
      },
    ],
  },
];
