export default function Stats() {
  const statData = [
    { name: "Words", number: 0 },
    { name: "Characters", number: 0 },
    { name: "Instagram", number: 280 },
    { name: "Facebook", number: 2200 },
  ];

  const Stat = ({ name, number }) => {
    return (
      <article className="stat">
        <span className="stat__number">{number}</span>
        <h2 className="second-heading">{name}</h2>
      </article>
    );
  };

  return (
    <section className="stats">
      {statData
        ? statData.map((el, i) => (
            <Stat key={i} name={el.name} number={el.number} />
          ))
        : ""}
    </section>
  );
}
