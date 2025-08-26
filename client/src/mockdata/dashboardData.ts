import {
  Clock,
  BarChart3,
  Users,
  Calendar
} from "lucide-react";
import type { IStat } from "../types/stat";

export const stats:IStat[] = [
  {
    label: "Total Interviews",
    value: 24,
    icon: Users,
    info: "+12% from last month",
  },
  {
    label: "Completed",
    value: 18,
    icon: BarChart3,
    info: "75% completion rate",
  },
  {
    label: "Avg. Duration",
    value: "44m",
    icon: Clock,
    info: "-2m from average",
  },
  {
    label: "This Week",
    value: 6,
    icon: Calendar,
    info: "2 scheduled today",
  },
];
