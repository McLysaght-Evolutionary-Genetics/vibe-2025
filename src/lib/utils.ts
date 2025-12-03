import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, "child"> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, "children"> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

export const links = [
  {
    title: "About",
    href: "/vibe/about",
  },
  {
    title: "Speakers",
    href: "/vibe/speakers",
  },
  {
    title: "Conference Program",
    href: "/vibe/program-conference",
  },
  {
    title: "ECR Meeting Program",
    href: "/vibe/program-ecr",
  },
  {
    title: "Venue",
    href: "/vibe/venue",
  },
  {
    title: "Organising Committee",
    href: "/vibe/committee",
  },
];
