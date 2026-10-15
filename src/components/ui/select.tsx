export function SelectGround({
  Grounds,
  firstOpt,
}: {
  firstOpt: string;
  Grounds: string[];
}) {
  return (
    <select name="" id="FilterGround" className="input">
      <option value={firstOpt} key={firstOpt.slice(3, 5)}>
        {firstOpt}
      </option>
      {Grounds.map((ground, index) => (
        <option value={ground} key={index}>
          {ground}
        </option>
      ))}
    </select>
  );
}

export function SelectOther({
  Tab,
  firstOpt,
}: {
  firstOpt: string;
  Tab: {
    id: string;
    label: string;
    min: number;
    max: number;
  }[];
}) {
  return (
    <select name="" id="Filter Other" className="input">
      <option value={firstOpt} key={firstOpt.slice(3, 5)}>
        {firstOpt}
      </option>
      {Tab.map(({ label, id }) => (
        <option value={label} key={id}>
          {label}
        </option>
      ))}
    </select>
  );
}
