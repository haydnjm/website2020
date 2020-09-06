import React from 'react';
import { CodeBlock, T, String, ObP, M, Comment } from '../Code';
import { CodeProps } from '..';

interface LookupBooksBasedOnAuthorId { copied: boolean }

const code = `
{
  $lookup: {
    from: "Author",
    as: "author",
    localField: "authorId",
    foreignField: "_id",
  }
},
{ $unwind: "$author" },
`

const LookupOrdersBasedOnId: React.FC<LookupBooksBasedOnAuthorId & CodeProps> = ({ copied, setCopied }) => {
return (
  <CodeBlock copy={code} lines={11}  copied={copied} setCopied={setCopied}>
    <Comment>// From the Books collections, lookup documents in the Author collection based</Comment><br />
    <Comment>// on their authorId and unwind as each book only has one Author</Comment><br />
    {`{`}<br />
    <T/><M>$lookup</M>: {'{'}<br />
    <T/><T/><ObP>from</ObP>: <String>"Author"</String>,<br />
    <T/><T/><ObP>as</ObP>: <String>"author"</String>,<br />
    <T/><T/><ObP>localField</ObP>: <String>"authorId"</String>,<br />
    <T/><T/><ObP>foreignField</ObP>: <String>"_id"</String><br />
    <T/>{`}`}<br />
    {`},`}<br />
    {`{`} <M>$unwind</M>: <String>"$author</String> {'},'}<br />
  </CodeBlock>
)
}

export default LookupOrdersBasedOnId;