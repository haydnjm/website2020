import React from 'react';
import { CodeBlock, T, String, ObP, M, Comment } from '../Code';
import { CodeProps } from '..';

interface MatchArrayLengthProps {}

const code = `
  {
    $match: {
      "colours.2": { $exists: true }
    }
  }
`;

const MatchArrayLength: React.FC<MatchArrayLengthProps & CodeProps> = ({ copied, setCopied }) => {
  return (
    <CodeBlock copy={code} lines={8} copied={copied} setCopied={setCopied}>
      <Comment>// Match documents where the 'colours' field has 3 elements or more</Comment><br />
      {`{`}<br />
      <T/><M>$match</M>: {'{'}<br />
      <T/><T/><String>"colours.2"</String>: {`{`}<br />
      <T/><T/><T/><M>$exists</M>: <ObP>true</ObP>,<br />
      <T/><T/>{`}`}<br />
      <T/>{`}`}<br />
      {`},`}<br />
    </CodeBlock>
  )
}

export default MatchArrayLength;