import { useState, useEffect } from 'react';
import { useRequest } from 'umi';
import { query } from '@/services/api';
import { IFocusCustomer } from '@/types';

export default () => {
  const [focusUsers, setFocusUsers] = useState<IFocusCustomer[]>([]);
  const { data } = useRequest(query);
  useEffect(() => {
    setFocusUsers(data);
  }, [data]);
  return { focusUsers, setFocusUsers };
};
