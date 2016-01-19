import {
  GraphQLBoolean
} from 'graphql';

import BlogPostModel from '../../../models/blog-post';

export default {
  type: GraphQLBoolean,
  resolve (root, params, options) {
    return BlogPostModel
      .remove({})
      .exec();
  }
};
