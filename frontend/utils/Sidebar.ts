import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarCheck, User2Icon } from "lucide-react";
import { RxComponent2 } from "react-icons/rx";
import { PiCertificateBold } from "react-icons/pi";
import { FcSettings, FcTodoList } from "react-icons/fc";
import { BsGraphUpArrow } from "react-icons/bs";
import { RiTodoLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";

export const iconsData = [
  { icon: RxComponent2, label: "Dashboard" },
  { icon: User2Icon, label: "Submit ID" },
  { icon: PiCertificateBold, label: "View Certficate" },
  { icon: RiTodoLine, label: "Assignments" },
  { icon: CalendarCheck, label: "Upcoming Events" },
  { icon: BsGraphUpArrow, label: "Assessments" },
  { icon: FiSettings, label: "Settings" },
];
