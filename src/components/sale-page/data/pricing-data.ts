const pricingData = [
  {
    id: "1p",
    pricingName: "Selects",
    description: "Unlimited culling only plan",
    price: {
      monthly: 15,
      yearly: 10,
      discountedMonthly: null,
      discountedYearly: null,
    },
    billType: "Billed Annually",
    highlight: false,
    features: [
      {
        id: "1",
        featureName: "Unlimited AI Culling",
        bold: false,
        include: true,
      },
      {
        id: "2",
        featureName: "Access to Marketplace",
        bold: false,
        include: true,
      },
      {
        id: "3",
        featureName: "Duplicate Detection",
        bold: false,
        include: true,
      },
      {
        id: "4",
        featureName: "Does not include Editing",
        bold: false,
        include: false,
      },
    ],
    productId: "price_1NltSzCYznn1uZfNgmm8YUFW",
    redirectLink:
      "https://secure.aftershoot.com/b/eVaaHq52c4dM4pO00t?prefilled_promo_code",
  },
  {
    id: "2p",
    pricingName: "Essentials",
    description: "Ideal for editing with pre-built AI Styles",
    price: {
      monthly: 18,
      yearly: 15,
      discountedMonthly: null,
      discountedYearly: null,
    },
    billType: "Billed Annually",
    highlight: false,
    features: [
      {
        id: "1",
        featureName: "Unlimited Edits",
        bold: false,
        include: true,
      },
      {
        id: "2",
        featureName: "Access to 30+ pre-built AI Styles",
        bold: false,
        include: true,
      },
      {
        id: "3",
        featureName: "1 Seat Multiple Logins",
        bold: false,
        include: true,
      },
    ],
    productId: "price_1IxujVCYznn1uZfNYhWHoKa0",
    redirectLink:
      "https://secure.aftershoot.com/b/28o2aU7ak9y68G400y?prefilled_promo_code",
  },

  {
    id: "3p",
    pricingName: "Pro",
    description: "Edit like a Pro with Personal AI Editing Profiles",
    price: {
      monthly: 48,
      yearly: 40,
      discountedMonthly: null,
      discountedYearly: null,
    },
    billType: "Billed Annually",
    highlight: true,
    features: [
      {
        id: "1",
        featureName: "Unlimited AI Culling",
        bold: false,
        include: true,
      },
      {
        id: "2",
        featureName: "Unlimited Edits",
        bold: false,
        include: true,
      },
      {
        id: "3",
        featureName: "Access to Marketplace",
        bold: false,
        include: true,
      },
      {
        id: "4",
        featureName: "1 Custom AI Profile",
        bold: false,
        include: true,
      },
      {
        id: "5",
        featureName: "Crop & Straighten",
        bold: false,
        include: true,
      },
      {
        id: "6",
        featureName: "1 Seat Multiple Logins",
        bold: false,
        include: true,
      },
    ],
    productId: "price_1NltU8CYznn1uZfNAQlw880G",
    redirectLink:
      "https://secure.aftershoot.com/b/00gdTC52c6lU7C0dRp?prefilled_promo_code",
  },
  {
    id: "4p",
    pricingName: "Max",
    description: "Ideal package for high volume photographers",
    price: {
      monthly: 72,
      yearly: 60,
      discountedMonthly: null,
      discountedYearly: null,
    },
    billType: "Billed Annually",
    highlight: false,
    features: [
      {
        id: "1",
        featureName: "Unlimited AI Culling",
        bold: false,
        include: true,
      },
      {
        id: "2",
        featureName: "Unlimited Edits",
        bold: false,
        include: true,
      },
      {
        id: "3",
        featureName: "Access to Marketplace",
        bold: false,
        include: true,
      },
      {
        id: "4",
        featureName: "1 Custom AI Profile",
        bold: false,
        include: true,
      },
      {
        id: "5",
        featureName: "Crop & Straighten",
        bold: false,
        include: true,
      },
      {
        id: "6",
        featureName: "1 Seat Multiple Logins",
        bold: false,
        include: true,
      },
    ],
    productId: "price_1NnJOFCYznn1uZfNRbwqVWoq",
    redirectLink:
      "https://secure.aftershoot.com/b/eVa7vedyIh0y8G414A?prefilled_promo_code",
  },
];

export type pricingDataProps = (typeof pricingData)[0];
export default pricingData;
