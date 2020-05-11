import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// import BlogPosts from '../../components/blog-posts/blog-posts';
import TagPage from '../tagpage/tagpage';
import PostPage from '../postpage/postpage';
import './blogpage.scss';
const Blogpage = ({ match }) => {
  return (
    <div className="blog-page">
      <Helmet>
        <title>Daring RavenX &mdash; Blogs</title>
        <meta property="og:title" content="Daring RavenX &mdash; Blogs" />
        <meta property="og:type" content="website" />
        <meta name="description" content="" />
        <meta property="og:site_name" content="Daring RavenX" />
        <meta property="og:url" content="https://www.jimohblogs.com.ng/blog" />
      </Helmet>

      {/* <Route exact path={`${match.path}`} component={BlogPosts} /> */}
      <Route exact path={`/blog/:tagId`} component={TagPage} />
      <Route path={`/blog/anime/:blogId`} component={PostPage} />
    </div>
  );
};

export default withRouter(Blogpage);
