export function copyToClipboard(str: string) {
  if (!document) throw new Error("NO DOCUMENT!");
  const el = document.createElement("textarea");
  el.value = Array.isArray(str) ? str.join("\r\n") : str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  const selected =
    (document.getSelection()?.rangeCount || 0) > 0
      ? document.getSelection()?.getRangeAt(0)
      : false;
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  if (selected) {
    document?.getSelection()?.removeAllRanges();
    document?.getSelection()?.addRange(selected);
  }
}

export default copyToClipboard;
