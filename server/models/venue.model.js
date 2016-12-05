import Promise from 'bluebird';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const VenueSchema = new Schema({
  name: { type: 'String', required: false },
  fbPageId: { type: 'String', required: false },
  adminUser: { type: Schema.Types.ObjectId, ref: 'User' },
  fbEvents: [{ type: 'String', required: false }],
  createdEvents: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

VenueSchema.statics.createAndSave = Promise.method(function(props) {
  let newVenue = new VenueModel(props);

  newVenue.save((err, result) => {
    if(err) {
      throw new Error(err);
    }

    return result;
  });

  return newVenue;
});

const VenueModel = mongoose.model('Venue', VenueSchema);

export default VenueModel;
