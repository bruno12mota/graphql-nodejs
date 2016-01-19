import {
  GraphQLBoolean
} from 'graphql';

import CommentModel from '../../../models/comment';

export default {
  type: GraphQLBoolean,
  resolve (root, params, options) {
    return CommentModel
      .remove()
      .exec();
  }
};
