import React from 'react';
import { CodeBlock, T, String, ObP, M, Comment } from '../Code';

interface LookupBooksBasedOnAuthorId {}

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

const LookupOrdersBasedOnId: React.FC<LookupBooksBasedOnAuthorId> = () => {
return (
  <CodeBlock copy={code} lines={12}>
    <Comment>// From the Books collections, lookup documents in the Author</Comment><br />
    <Comment>// collection based on their authorId and unwind as each book</Comment><br />
    <Comment>// only has one Author</Comment><br />
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