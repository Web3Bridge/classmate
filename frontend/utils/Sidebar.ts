import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarCheck, User2Icon } from "lucide-react";
import { RxComponent2 } from "react-icons/rx";
import { PiCertificateBold } from "react-icons/pi";
import { FcSettings, FcTodoList } from "react-icons/fc";
import { BsGraphUpArrow } from "react-icons/bs";

export const iconsData = [
  { icon: RxComponent2, label: "Dashboard" },
  { icon: User2Icon, label: "Submit ID" },
  { icon: PiCertificateBold, label: "View Certficate" },
  { icon: FcTodoList, label: "Assignments" },
  { icon: CalendarCheck, label: "Upcoming Events" },
  { icon: BsGraphUpArrow, label: "Assessments" },
  { icon: FcSettings, label: "Settings" },
];
