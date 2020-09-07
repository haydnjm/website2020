import React, { useCallback, useState } from "react";
import { Box, Text, Flex } from "rebass";
import { BsClipboard } from "react-icons/bs";
import Icon from "../theme/symbols/Icon";
import copyToClipboard from "../utils/copyToClipboard";
import { TransitionTimes } from "../theme";

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
  <Text display="inline" color="comment">
    {children}
  </Text>
);
export const F: React.FC = ({ children }) => (
  <Text display="inline" color="function">
    {children}
  </Text>
);

export const ObP: React.FC = ({ children }) => (
  <Text display="inline" color="objectProperty">
    {children}
  </Text>
);

interface CodeBlockProps {
  copy: string;
  copied: boolean;
  lines: number;
  setCopied: () => void;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  copy,
  lines,
  copied,
  setCopied,
}) => {
  const [hover, setHover] = useState(false);
  const handleCopy = useCallback(() => {
    copyToClipboard(copy);
    setCopied();
  }, [copy, setCopied]);

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
          transition: `${TransitionTimes.FAST}ms`,
        }}
      >
        <Flex alignItems="center" justifyContent="center">
          <Box pt={1}>
            <Icon icon={BsClipboard} />
          </Box>
          <Box>
            <Text
              sx={{
                display: "inline",
                opacity: copied ? 1 : 0,
                transition: copied ? `${TransitionTimes.MEDIUM}ms` : 0,
                transitionDelay: copied ? `${TransitionTimes.FAST / 2}ms` : 0,
              }}
            >
              Copied!
            </Text>
          </Box>
        </Flex>
      </Box>
      <Flex>
        <Box mr={1} p={3} color="visited">
          {lines ? (
            <>
              {Array.from(Array(lines), (_, i) => (
                <span key={`code line ${copy} ${i}`}>
                  <span>{i + 1}</span>
                  <br />
                </span>
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
