import React, { useContext } from "react";
import { WorkoutShape } from "../shapes/workouts";
import { UsernameContext } from "../App";

export const WorkoutType = ({ name, slug, count, icon_url }) => {
  const user = useContext(UsernameContext);
  return (
    <section className={`workout ${slug}`}>
      <h4>{name}</h4>
      <img src={icon_url} alt={name} />
      <p>Count: {count}</p>
    </section>
  );
};

WorkoutType.propTypes = WorkoutShape;
