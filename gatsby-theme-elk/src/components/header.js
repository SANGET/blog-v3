import React from 'react';
import { Link } from "gatsby";

const Header = (props) => {
  const { location, title } = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <div className="logo">
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}>
          {title}
        </Link>
      </div>
    );
  } else {
    header = (
      <div className="logo">
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}>
          {title}
        </Link>
      </div>
    );
  }

  return (
    <header className="container header">
      {header}
    </header>
  );
};

export default Header;
