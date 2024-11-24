export default interface Quest {
  id: string;
  name: string;
  email: string;
  confirmed: boolean;
  hasCompanions: boolean;
  countCompanions: number;
}
