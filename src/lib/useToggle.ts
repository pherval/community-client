import { useState } from "react";

export default function useToggle(defaultValue = false) {
  const [on, setOn] = useState<boolean>(defaultValue);

  return {
    toggle: () => setOn(!on),
    hide: !on,
    show: on,
    visible: on,
    on,
    off: !on,
  };
}
