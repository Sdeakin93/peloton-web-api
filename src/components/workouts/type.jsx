import React from "react";
import { WorkoutShape } from "./shapes";

export const WorkoutType = ({ name, slug, count, icon_url }) => {
  return (
    <section className={`workout ${slug}`}>
      <h2>{name}</h2>

      <div className="flex justify-center">
        <img
          className="transform scale-75 md:scale-50"
          src={icon_url}
          alt={name}
        />
      </div>
      <p>Count: {count}</p>
    </section>
  );
};

WorkoutType.propTypes = WorkoutShape;
