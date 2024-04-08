import { AboutType } from "./about";
import { ContactsType } from "./contacts";
import { EducationPlanType } from "./education";
import { EmployeeType } from "./employee";
import { EnterInstituteType } from "./enter";
import { FaqType } from "./faq";
import { FooterType } from "./footer";
import { HeroType } from "./hero";
import { PartnerType } from "./partner";
import { ProfessionType } from "./profession";
import { QuestionType } from "./question";
import { ReviewType } from "./review";

export type DataType = {
  hero: HeroType,
  about: AboutType[],
  profession: ProfessionType,
  questions: QuestionType[],
  educationPlan: EducationPlanType[],
  employees: EmployeeType[],
  partners: PartnerType[],
  enterInstitute: EnterInstituteType[],
  faq: FaqType[],
  reviews: ReviewType[],
  contacts: ContactsType,
  footer: FooterType,
};