import React from 'react';
import { CodeBlock, T, String, ObP, M, Comment } from '../Code';
import { CodeProps } from '..';

interface MatchAfterDateProps {}

const code = `
{
  $match: {
    created: {
      $gt:ISODate("2020-01-01")
    }
  }
}`

const MatchAfterDate: React.FC<MatchAfterDateProps & CodeProps> = ({ copied, setCopied }) => {
  return (
    <CodeBlock copy={code} lines={7} copied={copied} setCopied={setCopied} title='Match after a date'>
      {/* <Comment>// Match documents where the 'created' field is after Jan 01 2020 00:00:00</Comment><br /> */}
      {`{`}<br />
      <T/><M>$match</M>: {'{'}<br />
      <T/><T/><ObP>created</ObP>: {`{`}<br />
      <T/><T/><T/><M>$gt</M>: <ObP>ISODate(<String>"2020-01-01"</String>)</ObP><br />
      <T/><T/>{`}`}<br />
      <T/>{`}`}<br />
      {`},`}<br />
    </CodeBlock>
  )
}

export default MatchAfterDate;