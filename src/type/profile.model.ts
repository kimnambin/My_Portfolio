import {ReactNode} from 'react';

export interface AwardType {
  year: string;
  title: string;
  description: string;
  icon: ReactNode;
  link?: string;
}

export interface infoType {
  href: string | null;
  icon: ReactNode;
  title: string;
  description: string;
}
