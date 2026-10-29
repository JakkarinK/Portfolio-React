export interface Technology {
  name: string;
  icon?: string;
}

interface TechnologyListProps {
  items: Technology[];
}

const TechnologyList = ({ items }: TechnologyListProps) => (
  <div className="technology-list">
    {items.map(({ name, icon }) => (
      <span className="technology-chip" key={name}>
        {icon && <img alt="" src={icon} />}
        {name}
      </span>
    ))}
  </div>
);

export default TechnologyList;
