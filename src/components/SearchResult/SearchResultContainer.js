import { connect } from 'react-redux';
import SearchResults from './SearchResult';
import { getCardsFromSearch } from '../../redux/cardsRedux';


const mapStateToProps = (state, props) => {
  const searchString = props.match.params.search;
  return {
    cards: getCardsFromSearch(state, searchString),
  };
};

export default connect(mapStateToProps)(SearchResults);