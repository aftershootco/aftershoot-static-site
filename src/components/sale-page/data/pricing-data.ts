const pricingData = [
  {
    id: "1",
    pricingName: "Selects",
    description: "Get unlimited AI Culling",
    price: {
      monthly: 12,
      yearly: 120,
      discountedMonthly: 9,
      discountedYearly: 99,
    },
    billType: "Billed Annually",
    highlight: false,
    features: [
      {
        id: "1",
        featureName: "Unlimited AI Culling",
        bold: true,
        include: true,
      },
      {
        id: "2",
        featureName: "Automated AI Selections",
        bold: false,
        include: true,
      },
      {
        id: "3",
        featureName: "Duplicate Grouping",
        bold: false,
        include: true,
      },
      {
        id: "4",
        featureName: "Unlimited Editing",
        bold: false,
        include: false,
      },
    ],
    productId: "price_1IxujVCYznn1uZfNYhWHoKa0",
    redirectLink:
      "https://secure.aftershoot.com/b/28o2aU7ak9y68G400y?prefilled_promo_code",
  },
  {
    id: "2",
    pricingName: "Essentials",
    description: "Cull & Edit Your Images with Prebuilt AI Styles",
    price: {
      monthly: 40,
      yearly: 240,
      discountedMonthly: 40,
      discountedYearly: 199,
    },
    billType: "Billed Annually",
    highlight: false,
    features: [
      {
        id: "1",
        featureName: "Unlimited AI Culling",
        bold: true,
        include: true,
      },
      {
        id: "2",
        featureName: "Unlimited AI Editing",
        bold: true,
        include: true,
      },
      {
        id: "3",
        featureName: "Access to 30+ AI Styles",
        bold: false,
        include: true,
      },
      {
        id: "4",
        featureName: "Access to Creator Styles",
        bold: false,
        include: true,
      },
      {
        id: "5",
        featureName: "AI Crop & Straighten for additional $7",
        bold: false,
        include: true,
      },
      {
        id: "6",
        featureName: "Custom AI Profiles",
        bold: false,
        include: false,
      },
    ],
    productId: "price_1NltSzCYznn1uZfNgmm8YUFW",
    redirectLink:
      "https://secure.aftershoot.com/b/eVaaHq52c4dM4pO00t?prefilled_promo_code",
  },
  {
    id: "3",
    pricingName: "Pro",
    description: "Cull & Edit like a Pro with Personal AI Profile",
    price: {
      monthly: 40,
      yearly: 480,
      discountedMonthly: 40,
      discountedYearly: 399,
    },
    billType: "Billed Annually",
    highlight: true,
    features: [
      {
        id: "1",
        featureName: "Unlimited AI Culling",
        bold: true,
        include: true,
      },
      {
        id: "2",
        featureName: "Unlimited AI Editing",
        bold: true,
        include: true,
      },
      {
        id: "3",
        featureName: "Access to 30+ AI Styles",
        bold: true,
        include: true,
      },
      {
        id: "4",
        featureName: "Access to Creator Styles",
        bold: false,
        include: true,
      },
      {
        id: "5",
        featureName: "1 Custom AI Profile",
        bold: false,
        include: true,
      },
      {
        id: "6",
        featureName: "Crop & Straighten",
        bold: false,
        include: true,
      },
      {
        id: "7",
        featureName: "Additional Custom AI Profile for $7",
        bold: false,
        include: true,
      },
    ],
    productId: "price_1NltU8CYznn1uZfNAQlw880G",
    redirectLink:
      "https://secure.aftershoot.com/b/00gdTC52c6lU7C0dRp?prefilled_promo_code",
  },
  {
    id: "4",
    pricingName: "Max",
    description: "Create Your Own AI Assistants to Automate Post-processing",
    price: {
      monthly: 40,
      yearly: 720,
      discountedMonthly: 40,
      discountedYearly: 599,
    },
    billType: "Billed Annually",
    highlight: false,
    features: [
      {
        id: "1",
        featureName: "Unlimited AI Culling",
        bold: true,
        include: true,
      },
      {
        id: "2",
        featureName: "Unlimited AI Editing",
        bold: true,
        include: true,
      },

      {
        id: "3",
        featureName: "Access to 30+ AI Styles",
        bold: true,
        include: true,
      },
      {
        id: "4",
        featureName: "Access to Creator Styles",
        bold: true,
        include: true,
      },
      {
        id: "5",
        featureName: "5 Custom AI Profiles",
        bold: false,
        include: true,
      },
      {
        id: "6",
        featureName: "Crop & Straighten",
        bold: false,
        include: true,
      },
      {
        id: "7",
        featureName: "Priority Onboarding",
        bold: false,
        include: true,
      },
      {
        id: "8",
        featureName: "1 License with 2 device logins",
        bold: false,
        include: true,
      },
      {
        id: "9",
        featureName: "Additional Custom AI Profile for $7",
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
