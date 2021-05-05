import PropTypes from "prop-types";

const WorkoutShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  icon_url: PropTypes.string.isRequired
});

const WorkoutsShape = PropTypes.arrayOf(WorkoutShape);

export { WorkoutShape, WorkoutsShape };
