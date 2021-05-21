import React from 'react';
import { CodeBlock, T, String, ObP, M } from '../Code';
import { CodeProps } from '..';

interface LookupBooksBasedOnAuthorId { copied: boolean }

const code = `
{
  $lookup: {
    from: '<ForeignCollection>',
    as: '<foreignDocument>',
    localField: '<documentId>',
    foreignField: '<_id>',
  }
},
{ $unwind: "$<foreignDocument>" }
`

const LookupOrdersBasedOnId: React.FC<LookupBooksBasedOnAuthorId & CodeProps> = ({ copied, setCopied }) => {
return (
  <CodeBlock copy={code} lines={9}  copied={copied} setCopied={setCopied} title='Look up single document'>
    {/* <Comment>// From the Books collections, lookup documents in the Author collection based</Comment><br />
    <Comment>// on their authorId and unwind as each book only has one Author</Comment><br /> */}
    {`{`}<br />
    <T/><M>$lookup</M>: {`{`}<br />
    <T/><T/><ObP>from</ObP>: <String>"ForeignCollection"</String>,<br />
    <T/><T/><ObP>as</ObP>: <String>"foreignDocument"</String>,<br />
    <T/><T/><ObP>localField</ObP>: <String>"documentId"</String>,<br />
    <T/><T/><ObP>foreignField</ObP>: <String>"_id"</String><br />
    <T/>{`}`}<br />
    {`},`}<br />
    {`{`} <M>$unwind</M>: <String>"$foreginDocument</String> {'},'}<br />
  </CodeBlock>
)
}

export default LookupOrdersBasedOnId;