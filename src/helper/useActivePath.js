import { usePathname } from "next/navigation";

export const useActivePath = () => {
  const pathname = usePathname();

  const checkActivePath = (path) => {
    return path === pathname;
  };

  return checkActivePath;
};
