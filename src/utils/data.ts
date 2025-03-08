import type { Comment, Plan } from "./interfaces";

export const commentsMock: Comment[] = [
  {
    id: 1,
    userName: "User1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    userName: "User2",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    userName: "User3",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    id: 4,
    userName: "User4",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit.",
  },
  {
    id: 5,
    userName: "User5",
    text: "Excepteur sint occaecat cupidatat non proident.",
  },
];

export const plansMock: Plan[] = [
  {
    name: "Basic Plan",
    price: "$5.99/mes",
    features: [
      "720p resolution",
      "1 screen at a time",
      "Limited content",
      "Ads included",
    ],
  },
  {
    name: "Standard Plan",
    price: "$9.99/mes",
    features: [
      "1080p resolution",
      "2 screens at a time",
      "Full content library",
      "No ads",
    ],
  },
  {
    name: "Premium Plan",
    price: "$14.99/mes",
    features: [
      "4K + HDR resolution",
      "4 screens at a time",
      "Exclusive content",
      "Offline downloads",
    ],
  },
];
