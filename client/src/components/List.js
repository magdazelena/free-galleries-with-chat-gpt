export function List({ text }) {
  const wrapUrls = (string) => {
    const urlRgx =
      /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\\/%=~_|$])/gim;
    const link = string.match(urlRgx);
    return (
      <span>
        {wrapTitles(string.replace(urlRgx, ""))}
        <a href={link}>{link}</a>
      </span>
    );
  };
  const wrapTitles = (string) => {
    const titleRgx = /(\w+.)+(?=\s-|–\s)/g;
    return (
      <>
        <h2>{string.match(titleRgx)}</h2>
        <p>{string.replace(titleRgx, "")}</p>
      </>
    );
  };
  const parseText = (input) => {
    if (!input) return <></>;
    const array = input.split(/([0-9])\.+\s+/g);

    return (
      <ol className="list">
        {array
          .filter((_, i) => i !== 0 && i % 2 === 0)
          .map((item, i) => (
            <li className="list-item" key={i}>
              {wrapUrls(item)}
            </li>
          ))}
      </ol>
    );
  };
  return parseText(text);
}
