import React from 'react';
import { CodeBlock, T, String, ObP, M, Comment } from '../Code';
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
  <CodeBlock copy={code} lines={10} copied={copied} setCopied={setCopied}>
    <Comment>// From the Author collections, lookup documents in the Author collection</Comment><br />
    <Comment>// based on their authorId</Comment><br />
    {`{`}<br />
    <T/><M>$lookup</M>: {'{'}<br />
    <T/><T/><ObP>from</ObP>: <String>"Book"</String>,<br />
    <T/><T/><ObP>as</ObP>: <String>"books"</String>,<br />
    <T/><T/><ObP>localField</ObP>: <String>"_id"</String>,<br />
    <T/><T/><ObP>foreignField</ObP>: <String>"authorId"</String><br />
    <T/>{`}`}<br />
    {`},`}<br />
  </CodeBlock>
)
}

export default LookupBooksFromAuthorId;