import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectBlogs } from '../../redux/blog/blog.selector';
import LatestPost from '../../components/latest-post/latest-post';
import loader from '../../assets/loader.gif';
import './homepage.scss';
const Homepage = ({ blogs }) => {
  return (
    <div className="homepage">
      {blogs ? (
        <LatestPost blog={blogs} />
      ) : (
        <div className="loader">
          <img id="loader" src={loader} alt="Loader" />
        </div>
      )}
      {blogs ? (
        <div className="btn-container">
          <Link to="/blog">View All Blog</Link>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  blogs: selectBlogs,
});

export default connect(mapStateToProps)(Homepage);
