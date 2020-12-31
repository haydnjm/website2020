import React from 'react';
import { CodeBlock, T, String, ObP, M } from '../Code';
import { CodeProps } from '..';

interface MatchWholeStringProps {}

const code = `
{
  $match: {
      name: /ayd/g
  }
}`

const MatchWholeString: React.FC<MatchWholeStringProps & CodeProps> = ({ copied, setCopied }) => {
  return (
    <CodeBlock copy={code} lines={5} copied={copied} setCopied={setCopied} title="Match partial string">
      {`{`}<br />
      <T/><M>$match</M>: {'{'}<br />
      <T/><T/><ObP>name</ObP>: /<String>ayd</String>/g<br />
      <T/>{`}`}<br />
      {`},`}<br />
    </CodeBlock>
  )
}

export default MatchWholeString;