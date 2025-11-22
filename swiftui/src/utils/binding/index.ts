import { SetStateAction } from 'react';

export type Binding<T> = {
  value: T;
  setValue: React.Dispatch<SetStateAction<T>>;
};

export type BooleanBinding = Binding<boolean> & { toggle: () => void };
export type NumberBinding = Binding<number>;
export type StringBinding = Binding<string>;
export type DateBinding = Binding<Date>;

export function getValueOrBinding<T>(incoming: T | Binding<T>): T {
  const value =
    incoming && typeof incoming === 'object' && 'value' in incoming
      ? (incoming as Binding<T>).value
      : incoming;
  return value as T;
}