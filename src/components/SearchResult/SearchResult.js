import React from 'react';
import styles from './SearchResult.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import { settings } from '../../data/dataStore';
import Container from '../Container/Container';




class SearchResult extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.node,
    match: PropTypes.object,
  }

  static defaultProps = {
    icon: settings.defaultSearchColumnIcon,
    title: settings.defaultSearchColumnTitle,
  }

  render() {
    const { title, icon, cards } = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}>{`${title}"${this.props.match.params.search}"`}<span className={styles.icon}><Icon name={icon} /></span></h3>
          <div className={styles.title}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResult;