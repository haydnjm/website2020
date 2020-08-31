import React, { useCallback, useState } from "react";
import { Box, Text, Flex } from "rebass";
import { BsClipboard } from "react-icons/bs";
import Icon from "../theme/symbols/Icon";
import copyToClipboard from "../utils/copyToClipboard";

interface CodeBlockProps {
  copy: string;
  lines: number;
}

export const T = () => <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>;

export const String: React.FC = ({ children }) => (
  <Text display="inline" color="string">
    {children}
  </Text>
);
export const Num: React.FC = ({ children }) => (
  <Text display="inline" color="number">
    {children}
  </Text>
);
export const Comment: React.FC = ({ children }) => (
  <Text display="inline" color="comment">
    {children}
  </Text>
);
export const M: React.FC = ({ children }) => (
  <Text display="inline" color="mongo">
    {children}
  </Text>
);

export const ObP: React.FC = ({ children }) => (
  <Text display="inline" color="objectProperty">
    {children}
  </Text>
);

export const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  copy,
  lines,
}) => {
  const [hover, setHover] = useState(false);
  const [copied, setCopied] = useState(false);
  const handleCopy = useCallback(() => {
    copyToClipboard(copy);
    setCopied(true);
  }, [copy]);

  return (
    <Box
      my={3}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{
        backgroundColor: "codeBackground",
        color: "codeBaseColor",
        fontFamily: "monospace",
        position: "relative",
        fontSize: "0.75rem",
        lineHeight: `${1 / 0.85}rem`,
        cursor: "pointer",
        transform: hover ? "scale(1.005)" : "scale(1)",
        transition: "100ms",
        boxShadow: "0 10px 10px -8px rgba(0,0,0, 0.3)",
      }}
      onClick={handleCopy}
    >
      <Box
        sx={{
          position: "absolute",
          top: 1,
          right: copied ? 1 : -50,
          transition: "300ms",
        }}
      >
        <Icon icon={BsClipboard} />
        <Text
          sx={{
            display: "inline",
            opacity: copied ? 1 : 0,
            transition: "1000ms",
          }}
        >
          Copied!
        </Text>
      </Box>
      <Flex>
        <Box mr={1} p={3} color="visited">
          {lines ? (
            <>
              {Array.from(Array(lines), (_, i) => (
                <>
                  <span>{i + 1}</span>
                  <br />
                </>
              ))}
            </>
          ) : (
            "NO LINES GIVEN"
          )}
        </Box>
        <Box p={3}>{children}</Box>
      </Flex>
    </Box>
  );
};
