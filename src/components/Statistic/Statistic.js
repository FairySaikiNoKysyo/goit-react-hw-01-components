import { SectionStat } from "./StatisticStyled";

export const Statistic = ({ title, stats }) => {
  return (
   <SectionStat>
      {title && <h2 >{title}</h2>}

      <ul className="stat-list">
        {stats.map(stat => {
          return (
            <li key={stat.id} className="item">
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
      </SectionStat>
  );
};
