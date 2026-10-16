export function SelectNeighborhood({
  Neighborhoods,
  firstOpt,
  neighborhood,
  setNeighborhood,
}: {
  neighborhood: string;
  setNeighborhood: (val: string) => void;
  firstOpt: string;
  Neighborhoods: string[];
}) {
  return (
    <select
      name=""
      id="FilterGround"
      className="input"
      value={neighborhood}
      onChange={(e) => setNeighborhood(e.currentTarget.value)}
    >
      <option value={firstOpt} key={firstOpt.slice(3, 5)}>
        {firstOpt}
      </option>
      {Neighborhoods.map((ground, index) => (
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
  filterValue,
  setFilterValue,
}: {
  filterValue: string;
  setFilterValue: (val: string) => void;
  firstOpt: string;
  Tab: {
    id: string;
    label: string;
    min: number;
    max: number;
  }[];
}) {
  return (
    <select
      name=""
      id="Filter Other"
      className="input"
      value={filterValue}
      onChange={(e) => setFilterValue(e.currentTarget.value)}
    >
      <option value={firstOpt} key={firstOpt.slice(3, 5)}>
        {firstOpt}
      </option>
      {Tab.map(({ label, id }) => (
        <option value={id} key={id}>
          {label}
        </option>
      ))}
    </select>
  );
}
