import React from 'react';
import { CodeBlock, T, String, ObP, M } from '../Code';
import { CodeProps } from '..';

interface LookupBooksFromAuthorIdProps {}

const code = `
{
  $lookup: {
    from: "Book",
    as: "books",
    localField: "_id",
    foreignField: "authorId",
  }
}`

const LookupBooksFromAuthorId: React.FC<LookupBooksFromAuthorIdProps & CodeProps> = ({ copied, setCopied }) => {
return (
  <CodeBlock copy={code} lines={8} copied={copied} setCopied={setCopied} title='Look up array'>
    {/* <Comment>// From the Author collections, lookup documents in the Author collection</Comment><br />
    <Comment>// based on their authorId</Comment><br /> */}
    {`{`}<br />
    <T/><M>$lookup</M>: {'{'}<br />
    <T/><T/><ObP>from</ObP>: <String>"ForeignCollection"</String>,<br />
    <T/><T/><ObP>as</ObP>: <String>"foreignDocuments"</String>,<br />
    <T/><T/><ObP>localField</ObP>: <String>"_id"</String>,<br />
    <T/><T/><ObP>foreignField</ObP>: <String>"localProperty"</String><br />
    <T/>{`}`}<br />
    {`},`}<br />
  </CodeBlock>
)
}

export default LookupBooksFromAuthorId;