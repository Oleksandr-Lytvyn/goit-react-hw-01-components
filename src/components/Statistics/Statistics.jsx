export function Statistics(props) {
  return (
    <section className="statistics">
      {props.title && <h2 className="title">{props.title}</h2>}

      <ul className="stat-list">
        {props.stats.map(item => (
          <li
            className="item"
            key={item.id}
            style={{ backgroundColor: generateLightColorRgb() }}
          >
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}</span>
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
