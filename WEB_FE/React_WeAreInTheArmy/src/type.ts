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
