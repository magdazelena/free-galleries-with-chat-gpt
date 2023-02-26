export function List({ text }) {
  const wrapUrls = (string) => {
    const urlRgx =
      /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim;
    const link = string.match(urlRgx);
    return (
      <span>
        {string.replace(urlRgx, "")}
        <a href={link}>{link}</a>
      </span>
    );
  };
  const parseText = (input) => {
    if (!input) return <></>;
    const array = input.split(/([0-9])\.+\s+/g);

    return (
      <ol>
        {array
          .filter((_, i) => i !== 0 && i % 2 === 0)
          .map((item, i) => (
            <li key={i}>{wrapUrls(item)}</li>
          ))}
      </ol>
    );
  };
  return parseText(text);
}
