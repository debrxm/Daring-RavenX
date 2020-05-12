import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import renderHTML from 'react-render-html';
import { selectComments } from '../../redux/blog/blog.selector';
import PostPreview from '../post-preview/post-preview';
import { fomatDate } from '../../utils/date-fomatter';
import './latest-post.scss';
const LatestPost = ({ blog }) => {
  return (
    <div className="latest-post">
      <section className="blog-area section">
        {blog
          .filter((item, index) => index < 1)
          .map((blog, index) => {
            const date = new Date(blog.updated_at.seconds * 1000);
            return (
              <div key={index} className="latest-post-preview">
                <div className="latest-post-preview-image">
                  <img src={blog.image} alt="post img" />
                </div>
                <div className="latest-post-preview-text">
                  <div className="text-head">
                    <span className="flag">Latest</span>
                    <span className="date">
                      {fomatDate(blog.updated_at.seconds, 'long')}
                    </span>
                  </div>
                  <h2 className="title">{blog.title}</h2>
                  <p className="preview-text">
                    {renderHTML(blog.content).props
                      ? renderHTML(blog.content)
                          .props.children[0].split(' ')
                          .slice(0, 12)
                          .join(' ')
                      : renderHTML(blog.content)[0]
                          .props.children[0].split(' ')
                          .slice(0, 12)
                          .join(' ')}
                    <br />
                    <br />
                    <Link
                      to={`/blog/${blog.tag
                        .toString()
                        .toLowerCase()}/${blog.title
                        .split(' ')
                        .join('-')
                        .toLowerCase()}`}
                    >
                      <span className="read-more">Read More</span>
                    </Link>
                  </p>
                  <span className="tag">{blog.tag.replace('_', ' ')}</span>
                </div>
              </div>
            );
          })}
        <div className="output">
          {blog
            .filter((item, index) => index < 9)
            .slice(1)
            .map((blog, index) => (
              <PostPreview key={index} blog_data={blog} />
            ))}
        </div>
      </section>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  postComments: selectComments,
});

export default withRouter(connect(mapStateToProps)(LatestPost));
