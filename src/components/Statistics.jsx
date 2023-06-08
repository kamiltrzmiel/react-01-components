import propTypes from 'prop-types';

export const Statistics = ({el, title = 'UPLOAD STATS'}) => {
  return (
    <section className='statistics'>
      <h2 className='title'>{title}</h2>
      <ul className='stat-list'>
        {el.map(({id, label, percentage}) => (
          <li className='item' key={id}>
            <span className='label'>{label}</span>
            <span className='percentage'>{percentage}%</span>
          </li>
      
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  el: propTypes.array.isRequired,
};
