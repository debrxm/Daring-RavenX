import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectPostByTag } from '../../redux/blog/blog.selector';
// import PostPreview from '../../components/post-preview/post-preview';
import loader from '../../assets/loader.gif';
import './tagpage.scss';

const TagPage = ({ blogs }) => {
  return (
    <div className="tag-page">
      <div className="output">
        {blogs ? (
          blogs.map((blog) => ({
            /* <PostPreview
              key={blog.title}
              blog_data={blog}
              reDirect
            /> */
          }))
        ) : (
          <div className="loader">
            <img id="loader" src={loader} alt="Loader" />
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    blogs: selectPostByTag(
      ownProps.match.params.tagId,
      ownProps.match.url
    )(state),
  };
};

export default withRouter(connect(mapStateToProps)(TagPage));
