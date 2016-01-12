import {
  GraphQLList,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import {Types} from 'mongoose';

import eventType from '../../types/event';
import getProjection from '../../get-projection';
import EventModel from '../../../models/event';

export default {
  type: eventType,
  args: {
    title: {
      name: 'title',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return EventModel
      .findOne({
        title: params.title
      })
      .select(projection)
      .exec();
  }
};
