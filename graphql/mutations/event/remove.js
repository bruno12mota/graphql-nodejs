import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import eventType from '../../types/event';
import getProjection from '../../get-projection';
import EventModel from '../../../models/event';

export default {
  type: eventType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  async resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);
    const removedEvent = await EventModel
      .findByIdAndRemove(params._id, {
        select: projection
      })
      .exec();

    if (!removedEvent) {
      throw new Error('Error removing event');
    }

    return removedEvent;
  }
};
