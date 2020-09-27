import React from "react";
import { CodeBlock, T, String, ObP, M, Comment, Num } from "../Code";
import { CodeProps } from "..";

interface SortArraysWithinDocumentsProps {}

const code = `
  {
    $unwind: { path: "$arrayProperty",  }
  }
`;

const SortArraysWithinDocuments: React.FC<SortArraysWithinDocumentsProps & CodeProps> = ({ copied, setCopied, width }) => {
  return (
    <CodeBlock copy={code} lines={10} copied={copied} setCopied={setCopied} title="Sort arrays" width={width}>
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
