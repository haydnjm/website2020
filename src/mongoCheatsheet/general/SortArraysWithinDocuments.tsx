import React from "react";
import { CodeBlock, T, String, ObP, M, Comment, Num } from "../Code";
import { CodeProps } from "..";

interface SortArraysWithinDocumentsProps {}

const code = `
  {
    $unwind: { path: "$books",  }
  }
`;

const SortArraysWithinDocuments: React.FC<SortArraysWithinDocumentsProps & CodeProps> = ({ copied, setCopied }) => {
  return (
    <CodeBlock copy={code} lines={12} copied={copied} setCopied={setCopied}>
      <Comment>// Sorting arrays within documents:</Comment><br />
      <Comment>// Sort the 'books' array within the Author document, by published date (ascending)</Comment><br />
      {`{`} <M>$unwind</M>: <String>"$books"</String> {'},'}<br />
      {`{`}<br />
      <T /><M>$sort</M>: {'{'} <String>"$books.published"</String>: <Num>1</Num> {'},'}<br />
      {`},`}<br />
      {`{`}<br />
      <T /><M>$group</M>: {'{ '}<br />
      <T /><T /><ObP>_id</ObP>: <String>"$_id"</String>,<br />
      <T /><T /><ObP>authorRoot</ObP>: {'{'} <ObP>$first</ObP>: <String>"$$ROOT"</String> {'}'},<br />
      <T />{'}'}<br />
      {`},`}<br />
    </CodeBlock>
  );
};

export default SortArraysWithinDocuments;
