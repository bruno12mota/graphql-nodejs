import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import commentInputType from '../../types/comment-input';
import CommentModel from '../../../models/comment';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(commentInputType)
    }
  },
  async resolve (root, params, options) {
    const commentModel = new CommentModel(params.data);
    const newComment = await commentModel.save();

    if (!newComment) {
      throw new Error('Error adding new comment');
    }
    return true;
  }
};
