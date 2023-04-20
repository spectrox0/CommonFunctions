import { FC, PropsWithChildren } from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
export type FCC<T = {}> = FC<PropsWithChildren<T>>;

// eslint-disable-next-line @typescript-eslint/ban-types
export type ListC<T = {}> = { items: T[] };

type ValueOf<T> = T[keyof T];
export type Entries<T> = [keyof T, ValueOf<T>][];

export type Position = {
  coords: Pick<
    GeolocationPosition["coords"],
    "latitude" | "altitude" | "longitude"
  >;
};

export type PropsFrom<TComponent> = TComponent extends React.FC<infer Props>
  ? Props
  : TComponent extends React.Component<infer Props>
  ? Props
  : never;
