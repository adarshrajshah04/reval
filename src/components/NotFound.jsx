import React from "react";
import { Link } from "react-router-dom";
import classes from "../assets/css/NotFound.module.css";

const NotFound = () => {
  return (
    <section className={classes.main}>
      <div className={classes.content}>
        <h1 className={classes.code}>404</h1>

        <h2 className={classes.title}>Oops! Page Not Found</h2>

        <p className={classes.text}>
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link to="/" className={classes.btn}>
          ← Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;