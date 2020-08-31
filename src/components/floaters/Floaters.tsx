import React, { useState, useRef, useEffect, useMemo } from "react";
import { Box, Image, Flex, SxStyleProp } from "rebass";
import Transitioner from "../Transitioner";

type IconProps = {
  src: string;
  title: string;
  id: number;
  seed: number;
  remove: () => void;
  initialX: number;
  sx?: SxStyleProp;
};
const FloatingIcon: React.FC<IconProps> = ({
  id,
  src,
  title,
  seed,
  remove: removeMe,
  initialX,
  sx,
}) => {
  const [xPos, setCount] = useState(initialX);
  const [hover, setHover] = useState(false);

  const savedCallback = useRef<any>();

  function callback() {
    const newX = xPos + 0.1;
    if (newX > 1.1) {
      removeMe();
    } else {
      setCount(newX);
    }
  }

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    tick();

    let id = setInterval(tick, 4000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const size = useMemo(() => 100 + (Math.random() - 0.5) * 100, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const yPos = useMemo(() => (seed + (Math.random() - 0.5) / 20) * 100, [
    xPos,
    seed,
  ]);

  return (
    <Box
      sx={{
        position: "absolute",
        top: `${yPos}%`,
        left: `${xPos * 100}%`,
        transition: `all 4000ms linear`,
      }}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Box>
          <Image
            src={src}
            width={size}
            height={size}
            minHeight={size}
            minWidth={size}
          />
        </Box>
        <Transitioner show={hover} duration={300}>
          <Box
            sx={{
              px: "6px",
              bg: "text",
              color: "background",
              borderRadius: "3px",
              boxShadow: "small",
            }}
          >
            {title}
          </Box>
        </Transitioner>
      </Flex>
    </Box>
  );
};

type Props = {
  ids: { title: string; src: string }[];
};

const FloatingObjects: React.FC<Props> = ({ ids }) => {
  const [objects, setObjects] = useState<
    Array<{
      id: number;
      src: string;
      seed: number;
      title: string;
      xPos: number;
    }>
  >(
    ids.slice(0, 10).map((id, i) => ({
      id: i,
      src: id.src,
      title: id.title,
      seed: Math.random() * 0.8,
      xPos: i / 10,
    }))
  );
  const [index, setIndex] = useState(11);
  const [key, setKey] = useState(ids.length);

  const savedCallback = useRef<any>();

  const removeObject = (id: number) => {
    setObjects(objects.filter((object) => object.id !== id));
  };

  function callback() {
    const seed = Math.random() * 0.8;
    const newObject = {
      id: key,
      src: ids[index].src,
      title: ids[index].title,
      seed,
      xPos: -0.2,
    };
    setObjects([...objects, newObject]);
    setIndex(index < ids.length - 1 ? index + 1 : 0);
    setKey(key + 1);
  }

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function addFloaterTick() {
      savedCallback.current();
    }

    let id = setInterval(addFloaterTick, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <Box sx={{ opacity: 0.1, py: 75 }}>
      {objects.map((obj) => (
        <FloatingIcon
          key={obj.id}
          id={obj.id}
          src={obj.src}
          title={obj.title}
          seed={obj.seed}
          remove={() => removeObject(obj.id)}
          initialX={obj.xPos}
        />
      ))}
    </Box>
  );
};

export default FloatingObjects;
