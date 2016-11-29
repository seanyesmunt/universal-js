import { Router } from 'express';
import BoomHandler from './middlewares/boom.middleware';

import VenueController from './controllers/venues.controller';
import EventController from './controllers/events.controller';

import Venue from './models/venue.model';
import Event from './models/event.model';

const instantiation = () => {
  return {
    Events: new EventController ({ Event }),
    Venues: new VenueController ({ Venue })
  };
};

const Routing = () => {
  const router = new Router();
  var Controllers = instantiation();

  // Event Routes
  router.get('/events/:id', Controllers.Events.getEvent.bind(Controllers.Events));
  router.get('/events', Controllers.Events.searchEvents.bind(Controllers.Events));
  router.post('/events', Controllers.Events.createEvent.bind(Controllers.Events));

  // Venue Routes
  // TODO (sprada): Authentication? Middleware?
  router.get('/venues/:id', Controllers.Venues.getVenue.bind(Controllers.Venues));
  router.get('/venues/:id/profile', Controllers.Venues.getProfile.bind(Controllers.Venues));
  router.get('/venues', Controllers.Venues.searchVenue.bind(Controllers.Venues));
  router.post('/venues', Controllers.Venues.createVenue.bind(Controllers.Venues));
  router.patch('/venues/:id', Controllers.Venues.updateVenue.bind(Controllers.Venues));

  router.use(BoomHandler);

  return router;
};

export default Routing;
