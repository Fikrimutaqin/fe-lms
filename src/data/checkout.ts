export const PAYMENT_METHODS = {
  virtualAccount: [
    { id: "bca", name: "BCA", sub: "VA BCA" },
    { id: "mandiri", name: "Mandiri", sub: "VA Mandiri" },
    { id: "bni", name: "BNI", sub: "VA BNI" },
    { id: "bri", name: "BRI", sub: "VA BRI" },
  ],
  eWallet: [
    { id: "gopay", name: "GoPay", color: "bg-blue-500", initials: "G" },
    { id: "ovo", name: "OVO", color: "bg-purple-600", initials: "O" },
    { id: "shopeepay", name: "ShopeePay", color: "bg-orange-600", initials: "S" },
    { id: "dana", name: "Dana", color: "bg-blue-400", initials: "D" },
  ],
};

export const CHECKOUT_ITEMS = [
  {
    id: 1,
    title: "Global Executive Strategy: 2024 Framework",
    category: "Masterclass",
    modules: 12,
    price: 4500000,
    image: "/assets/images/course-1.png",
  },
  {
    id: 2,
    title: "Leadership Philosophy for the Digital Age",
    category: "Seminar",
    modules: 8,
    price: 2750000,
    image: "/assets/images/course-2.png",
  },
];
