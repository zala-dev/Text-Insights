export default function Stats({ currentStats }) {
  const statData = [
    { name: "Words", number: currentStats.numberOfWords },
    { name: "Characters", number: currentStats.totalCharacters },
    { name: "Twitter / X", number: currentStats.instaCharactersLeft },
    { name: "Facebook", number: currentStats.facebookCharactersLeft },
  ];

  const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const Stat = ({ name, number }) => {
    return (
      <article className="stat">
        <span
          className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
        >
          {number}
        </span>
        <h2 className="second-heading">{name}</h2>
      </article>
    );
  };

  return (
    <section className="stats">
      {statData
        ? statData.map((el, i) => (
            <Stat
              key={i}
              name={el.name}
              number={numberFormatter.format(el.number)}
            />
          ))
        : ""}
    </section>
  );
}
