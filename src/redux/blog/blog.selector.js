import { createSelector } from 'reselect';

const selectBlogObject = (state) => state.blog;

export const selectBlogs = createSelector(
  [selectBlogObject],
  (blog) => blog.blogs
);
export const selectComments = createSelector(
  [selectBlogObject],
  (blog) => blog.comments
);
export const selectViews = createSelector(
  [selectBlogObject],
  (blog) => blog.views
);
export const selectCurrentReading = createSelector(
  [selectBlogObject],
  (blog) => blog.reading
);
export const selectHistory = createSelector(
  [selectBlogObject],
  (blog) => blog.history
);
export const selectReadersFavorite = createSelector(
  [selectBlogObject],
  (blog) => blog.favorite
);
export const selectPostByTag = (tagFromUrlParam, url) =>
  createSelector([selectBlogs], (blog) =>
    blog.filter((item, index) => item.tag.toLowerCase() === tagFromUrlParam)
  );
export const selectBlogById = (idFromUrlParam, url) =>
  createSelector([selectBlogs], (blog) =>
    blog.filter(
      (item, index) =>
        item.title.toLowerCase() === idFromUrlParam.split('-').join(' ')
    )
  );
