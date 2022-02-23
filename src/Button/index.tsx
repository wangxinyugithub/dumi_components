import React from 'react';
import { Button } from 'antd';
import styles from './index.css';

type IProps = {
  children ?: React.ReactNode
}

export default (props: IProps) => {

  return (
    <Button { ...props } className={styles.button_bt}>{props.children}</Button>
  )
}
