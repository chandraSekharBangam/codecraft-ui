import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
export function absoluteUrl(base: string, path = '/'): string {
  return new URL(path, base).toString();
}
