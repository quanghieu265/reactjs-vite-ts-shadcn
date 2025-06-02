import { EnumLanguages } from '@enums/locale';

export interface IItemLanguage {
  name: EnumLanguages;
  icon: () => JSX.Element;
}
