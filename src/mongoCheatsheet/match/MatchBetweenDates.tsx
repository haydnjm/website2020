import React from 'react';
import { CodeBlock, T, String, ObP, M } from '../Code';
import { CodeProps } from '..';

interface MatchBetweenDatesProps {}

const code = `
{
  $match: {
    created: {
      $gte:ISODate("2020-01-01"),
      $lt: ISODate("2021-01-01")
    }
  }
}`

const MatchBetweenDates: React.FC<MatchBetweenDatesProps & CodeProps> = ({ copied, setCopied }) => {
  return (
    <CodeBlock copy={code} lines={8} copied={copied} setCopied={setCopied} title='Match between dates'>
      {/* <Comment>// Match documents where the 'created' field is between 2 dates</Comment><br /> */}
      {`{`}<br />
      <T/><M>$match</M>: {'{'}<br />
      <T/><T/><ObP>created</ObP>: {`{`}<br />
      <T/><T/><T/><M>$gte</M>: <ObP>ISODate(<String>"2020-01-01"</String>)</ObP>,<br />
      <T/><T/><T/><M>$lt</M>: <ObP>ISODate(<String>"2021-01-01"</String>)</ObP><br />
      <T/><T/>{`}`}<br />
      <T/>{`}`}<br />
      {`},`}<br />
    </CodeBlock>
  )
}

export default MatchBetweenDates;