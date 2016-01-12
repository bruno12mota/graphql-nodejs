import {
  GraphQLList
} from 'graphql';

import eventType from '../../types/event';
import getProjection from '../../get-projection';
import EventModel from '../../../models/event';

export default {
  type: new GraphQLList(eventType),
  args: {},
  resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return EventModel
      .find({})
      .select(projection)
      .exec();
  }
};
