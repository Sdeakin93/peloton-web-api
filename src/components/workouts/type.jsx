import React from "react";
import { WorkoutShape } from "./shapes";

export const WorkoutType = ({ name, slug, count, icon_url }) => {
  return (
    <section className={`workout ${slug}`}>
      <h2>{name}</h2>

      <div class="flex justify-center">
        <img class="transform scale-75 md:scale-50" src={icon_url} alt={name} />
      </div>
      <p>Count: {count}</p>
    </section>
  );
};

WorkoutType.propTypes = WorkoutShape;
