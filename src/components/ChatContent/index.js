import React from 'react';
import PropTypes from 'prop-types';
import { withContext, compose, getContext } from 'recompose';
import { ChatContent } from './ChatContent';
import { Placeholder } from './Placeholder';

const Content = ({ interlocutorId = null }) =>
  (interlocutorId || interlocutorId === 0 ? <ChatContent /> : <Placeholder />);

Content.propTypes = {
  interlocutorId: PropTypes.string,
};

Content.defaultProps = {
  interlocutorId: null,
};

export default compose(
  withContext({ interlocutorId: PropTypes.string }, (props) => {
    const { match: { params: { interlocutorId } } } = props;
    return {
      interlocutorId,
    };
  }),
  getContext({ interlocutorId: PropTypes.string }),
)(Content);
