import React from 'react';
import { CodeBlock, T, ObP, M, F, Comment, Num } from '../Code';
import { CodeProps } from '..';

interface CountUsingGroupProps {}

const code = `
  {
    $group: {
      _id: null,
      sum: { $sum: 1 }
    }
  },
`;

const CountUsingGroup: React.FC<CountUsingGroupProps & CodeProps> = ({ copied, setCopied }) => {
  return (
    <CodeBlock copy={code} lines={7} copied={copied} setCopied={setCopied}>
      <Comment>// Count number of documents in pipeline</Comment><br />
      {`{`}<br />
      <T/><M>$group</M>: {'{'}<br />
      <T/><T/><ObP>_id</ObP>: <F>null</F>,<br />
      <T/><T/><ObP>sum</ObP>: {`{`} <M>$sum</M>: <Num>1</Num> {`}`},<br />
      <T/>{`}`}<br />
      {`},`}<br />
    </CodeBlock>
  )
}

export default CountUsingGroup;