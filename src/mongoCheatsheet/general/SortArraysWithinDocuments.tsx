import React from "react";
import { CodeBlock, T, String, ObP, M, Num } from "../Code";
import { CodeProps } from "..";

interface SortArraysWithinDocumentsProps {}

const code = `
{ $unwind: "$arrayProperty" },
{
    $sort: { "$arrayProperty.sortProperty": 1 },
},
{
    $group: {
        _id: "$_id",
        root: { $first: "$$ROOT" },
    }
},
{ $replaceRoot: { newRoot: "$root" } },
`;

const SortArraysWithinDocuments: React.FC<SortArraysWithinDocumentsProps & CodeProps> = ({ copied, setCopied, width }) => {
  return (
    <CodeBlock copy={code} lines={11} copied={copied} setCopied={setCopied} title="Sort array and get first element" width={width}>
      {/* <Comment>// Sorting arrays within documents:</Comment><br />
      <Comment>// Sort the 'arrayProperty' array within the Author document, by published date (ascending)</Comment><br /> */}
      {`{`} <M>$unwind</M>: <String>"$arrayProperty"</String> {'},'}<br />
      {`{`}<br />
      <T /><M>$sort</M>: {'{'} <String>"$arrayProperty.sortProperty"</String>: <Num>1</Num> {'},'}<br />
      {`},`}<br />
      {`{`}<br />
      <T /><M>$group</M>: {'{ '}<br />
      <T /><T /><ObP>_id</ObP>: <String>"$_id"</String>,<br />
      <T /><T /><ObP>root</ObP>: {'{'} <ObP>$first</ObP>: <String>"$$ROOT"</String> {'}'},<br />
      <T />{'}'}<br />
      {`},`}<br />
      {'{'} <M>$replaceRoot</M>: {'{'} <ObP>newRoot</ObP>: <String>"$root"</String> {'}'} {'},'} <br />
    </CodeBlock>
  );
};

export default SortArraysWithinDocuments;
