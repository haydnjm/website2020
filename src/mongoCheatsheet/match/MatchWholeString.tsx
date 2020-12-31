import React from 'react';
import { CodeBlock, T, String, ObP, M, Comment } from '../Code';
import { CodeProps } from '..';

interface MatchWholeStringProps {}

const code = `
{
  $match: {
    created: {
      $lt: ISODate("2021-01-01")
    }
  }
}`

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