import React, { PropTypes } from 'react';
import IndexLink from 'react-router/lib/IndexLink';
import Link from 'react-router/lib/Link';
import { StyleSheet, css } from 'aphrodite';
import { Type } from '../style';

const Nav = () =>
  <div>
    <IndexLink to="/"
      className={css(styles.link)}
      activeClassName={css(styles.link, styles.activeLink)}>
      Home
    </IndexLink>
    <Link to="/about"
      className={css(styles.link)}
      activeClassName={css(styles.link, styles.activeLink)}>
      About
    </Link>
    <a href="https://github.com/coderockr/redux-skeleton" className={css(styles.link)} target="_blank">GitHub</a>
  </div>;

const styles = StyleSheet.create({
  link: {
    maxWidth: 700,
    color: '#999',
    margin: '1.5rem 1rem 1.5rem 0',
    display: 'inline-block',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: '.2s opacity ease',
    ':hover': {
      opacity: .6,
    },
  },
  activeLink: {
    color: '#000',
  },
});

export default Nav;
