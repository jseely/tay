/**
 * @class User
 * @description
 */

import React from 'react';
import PropTypes from 'prop-types';

import container from 'containers/UserContainer';
import TripItem from 'web/components/TripItem';
import ListItem from 'web/components/ListItem';
import UserFilter from 'web/components/ListControls/UserFilter';
import StandardSort from 'web/components/ListControls/StandardSort';
import UserSideBar from 'web/components/UserSideBar';

import styles from './user.scss';

const propTypes = {
  // test: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  totalPosts: PropTypes.number.isRequired,
  consecutiveMonths: PropTypes.number.isRequired,
  createdDate: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  profilePic: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export const User = ({ name, totalPosts, consecutiveMonths, createdDate, posts, profilePic, bio }) => (
  <div className={styles.wrapper}>
    <div className={styles.topBar}>
      <h2 className={styles.name}>{name}</h2>
    </div>
    <main className={styles.main}>
      <UserSideBar {...{ totalPosts, consecutiveMonths, createdDate, bio, profilePic }} />

      <section className={styles.posts}>
        <div className={styles.postsTop}>
          <h3>{name.split(' ')[0]}&#39;s Posts</h3>
          <header className={styles.listControls}>
            <UserFilter />
            <StandardSort />
          </header>
        </div>

        <hr />

        { posts.map(post => (post.type === 'tr') ? <TripItem key={post.id} {...post} /> : <ListItem key={post.id} {...post} />) }
      </section>
    </main>
  </div>
);

User.propTypes = propTypes;

export default container(User);
