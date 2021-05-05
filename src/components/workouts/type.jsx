import React from "react";
import { WorkoutShape } from "./shapes";

export const WorkoutType = ({ name, slug, count, icon_url }) => {
  return (
    <section className={`workout ${slug}`}>
      <h2>{name}</h2>
      <img src={icon_url} alt={name} />
      <p>Count: {count}</p>
    </section>
  );
};

WorkoutType.propTypes = WorkoutShape;
