export interface IItemSubMenu {
  id: string;
  name: string;
  description: string;
  href: string;
  icon: () => JSX.Element;
}

export interface IItemMenu {
  id: string;
  name: string;
  href: string;
  children?: IItemSubMenu[] | null;
}

export interface IMenu {
  navigation: IItemMenu[] | [] | null;
  active: string;
  close?: () => void;
}

export interface IUserPopup {
  name: string;
  onClick: (event: MouseEvent<HTMLElement>) => void;
}
