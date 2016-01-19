import {
  GraphQLList
} from 'graphql';

import blogPostType from '../../types/blog-post';
import getProjection from '../../get-projection';
import BlogPostModel from '../../../models/blog-post';

export default {
  type: new GraphQLList(blogPostType),
  args: {},
  resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return BlogPostModel
      .find()
      .select(projection)
      .exec();
  }
};
