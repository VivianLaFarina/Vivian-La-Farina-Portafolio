import PropTypes from 'prop-types';
export function PageHeading({ eyebrow, title, lead }) {
  return <section className="page-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h1>{title}</h1>
    {lead && <p>{lead}</p>}
  </section>;
}

PageHeading.propTypes = { eyebrow: PropTypes.string.isRequired, title: PropTypes.string.isRequired, lead: PropTypes.string };
