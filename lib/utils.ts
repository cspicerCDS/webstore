import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getBasePath() {
  // Check if we're in development or production
  return process.env.NODE_ENV === 'development' 
    ? '' 
    : '/platterparty'
} 