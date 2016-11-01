export interface AlumniSubscriber {
  email: string;
  firstName: string;
  lastName: string;
  gradDate: {
    month: string;
    day: string;
    year: string;
  },
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    zip: string;
  }
}
