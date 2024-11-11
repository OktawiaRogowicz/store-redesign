export type FooterContentType = {
  name: string;
  customerService: {
    title: string;
    phoneNumber: string;
    email: string;
    openingHours: string;
  };
  contact: {
    title: string;
    street: string;
    postalCode: string;
    city: string;
    country: string;
  };
  credits: string;
  menu: {
    title: string;
    slug: {
      current: string;
    };
  }[];
  newsletter: {
    title: string;
    description: string;
    inputPlaceholder: string;
    termsOfService: string;
  };
};
