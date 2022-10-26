import React from 'react';

export type HasChild = {
  children: React.ReactNode;
};

export type Post = {
  id: number;
  accept: Accept;
  title: string;
};

export enum Accept {
  Pending = 0,
  Cancel = 1,
  Accept = 2,
}

export enum AccountTypes {
  ADMINISTRATOR = 'administrator',
  CITIZEN = 'citizen',
  MILLITARY = 'millitary',
  DEFAULT = 'default',
}

export type User = {
  idx: number;

  identifier: string;

  password: string;

  type: AccountTypes;

  name: string;

  phone: string;

  organization: string;

  email: string;

  address: string;

  createdAt: Date;

  updatedAt: Date;

  boards: Board[];
};

export enum RequestTypes {
  ENVIROMENTAL = 'enviromental',
  DISASTOR = 'disastor',
  SOCIAL = 'social',
  DEFAULT = 'default',
}

export type Board = {
  idx: number;

  type: RequestTypes;

  title: string;

  description: string;

  location: string;

  admit: boolean;

  image: string;

  createdAt: Date;

  updatedAt: Date;

  user: User;
};
