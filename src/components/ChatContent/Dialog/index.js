import { graphql } from 'react-apollo';
import { compose, getContext } from 'recompose';
import PropTypes from 'prop-types';
import { getDialogQuery } from '../apollo/queries';
import { Dialog } from './Dialog';

export default compose(
  getContext({ interlocutorId: PropTypes.string }),
  graphql(getDialogQuery, {
    options: ({ interlocutorId }) => ({ variables: { receiverId: interlocutorId } }),
    props: ({ data: { loading, dialog } }) => ({
      loading,
      messages: dialog,
    }),
  }),
)(Dialog);
