import { composeWithTracker } from 'react-komposer';
import { UserDetails } from '../components/user-details';
import { Loading } from '../components/loading';
//
const composer = (params, onReady) => {
  const user = Meteor.user();

  if (user) onReady(null, { user });
};

export default composeWithTracker(composer, Loading)(UserDetails);
