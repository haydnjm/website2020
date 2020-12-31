import React from 'react';
import { CodeBlock, T, String, ObP, M } from '../Code';
import { CodeProps } from '..';

interface MatchWholeStringProps {}

const code = `
{
  $match: {
      name: "Haydn"
  }
},`

const MatchWholeString: React.FC<MatchWholeStringProps & CodeProps> = ({ copied, setCopied }) => {
  return (
    <CodeBlock copy={code} lines={5} copied={copied} setCopied={setCopied} title="Match whole string">
      {`{`}<br />
      <T/><M>$match</M>: {'{'}<br />
      <T/><T/><ObP>name</ObP>: <String>"Haydn"</String><br />
      <T/>{`}`}<br />
      {`},`}<br />
    </CodeBlock>
  )
}

export default MatchWholeString;