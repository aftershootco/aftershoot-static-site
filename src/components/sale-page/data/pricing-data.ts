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
      monthly: 20,
      yearly: 25,
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
        featureName: "Access to 9 AI-Presets",
        bold: false,
        include: true,
      },
      {
        id: "3",
        featureName: "Fully Automated AI Selections",
        bold: false,
        include: true,
      },
      {
        id: "4",
        featureName: "Duplicate Detection",
        bold: false,
        include: true,
      },
      {
        id: "5",
        featureName: "Supports Lightroom Classic & Capture One",
        bold: false,
        include: true,
      },
      {
        id: "6",
        featureName: "Does not include Personal AI Editing Profiles",
        bold: false,
        include: false,
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
        featureName: "Access to 30+ pre-built AI Styles",
        bold: false,
        include: true,
      },
      {
        id: "3",
        featureName: "1 Personal AI Editing Profile",
        bold: false,
        include: true,
      },
      {
        id: "4",
        featureName: "Crop & Straighten",
        bold: false,
        include: true,
      },

      {
        id: "6",
        featureName: "Personal AI Editing Profile for additional $7 each",
        bold: false,
        include: true,
      },
      {
        id: "7",
        featureName: "Supports Lightroom Classic & Capture One",
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
        featureName: "Unlimited Culling & Unlimited Editing",
        bold: false,
        include: true,
      },
      {
        id: "2",
        featureName: "5 Personal AI Editing Profiles",
        bold: false,
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
        featureName: "Crop & Straighten",
        bold: false,
        include: true,
      },
      {
        id: "5",
        featureName: "Priority Onboarding",
        bold: false,
        include: true,
      },
      {
        id: "6",
        featureName: "1 License with 2 device logins",
        bold: false,
        include: true,
      },
      {
        id: "7",
        featureName: "Supports Lightroom Classic & Capture One",
        bold: false,
        include: true,
      },
      {
        id: "8",
        featureName: "Personal AI Editing Profile for additional $7 each",
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
