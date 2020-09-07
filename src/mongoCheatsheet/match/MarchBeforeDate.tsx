import React from 'react';
import { CodeBlock, T, String, ObP, M, Comment } from '../Code';
import { CodeProps } from '..';

interface MatchBeforeDateProps {}

const code = `
{
  $match: {
    created: {
      $lt: ISODate("2021-01-01")
    }
  }
}`

const MatchBeforeDate: React.FC<MatchBeforeDateProps & CodeProps> = ({ copied, setCopied }) => {
  return (
    <CodeBlock copy={code} lines={8} copied={copied} setCopied={setCopied}>
      <Comment>// // Match documents where the 'created' field is before Jan 01 2021 00:00:00</Comment><br />
      {`{`}<br />
      <T/><M>$match</M>: {'{'}<br />
      <T/><T/><ObP>created</ObP>: {`{`}<br />
      <T/><T/><T/><M>$lt</M>: <ObP>ISODate(<String>"2021-01-01"</String>)</ObP><br />
      <T/><T/>{`}`}<br />
      <T/>{`}`}<br />
      {`},`}<br />
    </CodeBlock>
  )
}

export default MatchBeforeDate;