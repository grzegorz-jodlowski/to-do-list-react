import { connect } from 'react-redux';
import SearchResult from './SearchResult';
import { getCardsForColumn } from '../../redux/cardsRedux.js';


const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

export default connect(mapStateToProps)(SearchResult);