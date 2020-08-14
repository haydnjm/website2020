import { useState, useCallback } from "react";

export type Coords = {
  x: number;
  y: number;
};

export default function (
  x: number = 0,
  y: number = 0
): [Coords, (coords: Partial<Coords>) => void] {
  const [loc, setLoc] = useState<Coords>({ x, y });

  const setCoordinates = useCallback(
    (coords: Partial<Coords>) => {
      setLoc({ ...loc, ...coords });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [x, y]
  );

  return [loc, setCoordinates];
}
