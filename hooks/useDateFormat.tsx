import { useEffect, useState } from "react";

export const useDateFormat = (date: string) => {
  const [newDateFormat, setNewDateFormat] = useState<string>("");
  //prevent ssr hydration error
  useEffect(() => {
    const dateObj: Date = new Date(date);
    setNewDateFormat(dateObj.toLocaleString("fi-Fi", {}));
  }, []);

  return newDateFormat;
};
