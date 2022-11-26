import css from '../Statistics/Statistics.module.css';

export function Statistics(props) {
  return (
    <section className={css.statistics}>
      {props.title && <h2 className={css.title}>{props.title}</h2>}

      <ul className={css.statlist}>
        {props.stats.map(item => (
          <li
            className={css.item}
            key={item.id}
            style={{ backgroundColor: generateLightColorRgb() }}
          >
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
function generateLightColorRgb() {
  const red = Math.floor(((1 + Math.random()) * 256) / 2);
  const green = Math.floor(((1 + Math.random()) * 256) / 2);
  const blue = Math.floor(((1 + Math.random()) * 256) / 2);
  return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}
