import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
//import Column from '../Column/Column.js';
import { settings } from '../../data/dataStore.js';
import ReactHtmlParser from 'react-html-parser';
//import Creator from '../Creator/Creator.js';


class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.string,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    const { title, image, description } = this.props;

    return (
      <section className={styles.component}>
        <Hero titleText={title} imageURL={image} />
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        {/* <div className={styles.columns}>
          {this.state.columns.map(({ key, ...columnProps }) => (
            <Column key={key} {...columnProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)} />
        </div> */}

      </section>
    );
  }
}

export default List;