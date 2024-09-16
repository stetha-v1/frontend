import React from "react";

export interface ISideNavigations {
  id: number;
  path: string;
  icon?: React.ReactNode;
  text: string;
}


export interface Doctor {
  id: number;
  name: string;
  image: string;
  profileLink: string;
}




interface IHeaderNavigations {
  label: string;
  path: string;
}

interface IHeaderNavigationsWithIncons {
  image: string | any,
  icon: React.ReactNode | null;
  path: string;
}

interface IHeaderRight {
  navigations: IHeaderNavigations[] | null;
  navigations_icons: IHeaderNavigationsWithIncons[];
}

export interface IHeader {
  company_name: string;
  right_data: IHeaderRight;
}
