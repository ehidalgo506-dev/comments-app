import React from 'react';
import Comment from '../Comment/Comment';
import Card from '../UI/Card';
import styles from './Main.module.scss';

const Main = (props) => {
  const { data } = props;
  return (
    <main className={styles.main}>
      <Card>
        <Comment data={data} />
      </Card>
    </main>
  );
};

export default Main;
