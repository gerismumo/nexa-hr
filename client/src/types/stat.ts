import type { LucideIcon } from "lucide-react";

export interface IStat {
  label: string;
  value: string | number;
  icon: LucideIcon;
  info?: string;
}
