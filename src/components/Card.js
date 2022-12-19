import PropTypes from 'prop-types';

export function Card3(props) {
  return (
    <div className="card">
      <div className="card-header"> {props.data.header}</div>
      <div className="card-content">
        <img src={props.data.img} alt="banana"></img>
      </div>
      <div className="card-footer">{props.data.footer}</div>
    </div>
  );
}

export function Card2(props) {
  return (
    <div className="card">
      <div className="card-header"> {props.header}</div>
      <div className="card-content">
        <img src={props.img} alt="banana"></img>
      </div>
      <div className="card-footer">{props.footer}</div>
    </div>
  );
}

export function Card(props) {
  return <div className="card">{props.children}</div>;
}

export function CardHeader(props) {
  return <div className="card-header">{props.children}</div>;
}

export function CardContent(props) {
  return <div className="card-content">{props.children}</div>;
}

export function CardFooter(props) {
  return <div className="card-footer">{props.children}</div>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

Card2.propTypes = {
  header: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Card3.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    footer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  }).isRequired,
};
