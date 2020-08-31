import React from 'react';
import { CodeBlock, T, String, ObP, M, Comment } from '../Code';

interface LookupOrdersBasedOnIdProps {}

const code = `
{
  $lookup: {
    from: "Book",
    as: "books",
    localField: "_id",
    foreignField: "authorId",
  }
}`

const LookupOrdersBasedOnId: React.FC<LookupOrdersBasedOnIdProps> = () => {
return (
  <CodeBlock copy={code} lines={10}>
    <Comment>// From the Author collections, lookup documents in the Author</Comment><br />
    <Comment>// collection based on their authorId</Comment><br />
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

export default LookupOrdersBasedOnId;