import React from 'react';
import { CodeBlock, T, String, ObP, M, F, Comment } from '../Code';
import { CodeProps } from '..';

interface SumUsingGroupProps {}

const code = `
  {
    $group: {
      _id: null,
      sum: { $sum: '$price' }
    }
  },
`;

const SumUsingGroup: React.FC<SumUsingGroupProps & CodeProps> = ({ copied, setCopied }) => {
  return (
    <CodeBlock copy={code} lines={6} copied={copied} setCopied={setCopied} title='Sum propery of documents'>
      {/* <Comment>// Sum the 'price' field on all documents</Comment><br /> */}
      {`{`}<br />
      <T/><M>$group</M>: {'{'}<br />
      <T/><T/><ObP>_id</ObP>: <F>null</F>,<br />
      <T/><T/><ObP>sum</ObP>: {`{`} <M>$sum</M>: <String>"$property"</String> {`}`},<br />
      <T/>{`}`}<br />
      {`},`}<br />
    </CodeBlock>
  )
}

export default SumUsingGroup;