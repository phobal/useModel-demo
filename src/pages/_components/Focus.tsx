import * as React from 'react';
import { List } from 'antd';
import { Link, useModel } from 'umi';
import { StarOutlined, StarFilled } from '@ant-design/icons';
import { pick } from 'lodash';
import { IFocusCustomer } from '@/types';

const style = {
  paddingRight: 10,
  cursor: 'pointer',
};
// @ts-ignore
const ActiveStarIcon = ({ onClick }) => (
  <StarFilled style={{ color: '#4ba777', ...style }} onClick={onClick} />
);
// @ts-ignore
const UnActiveStarIcon = ({ onClick }) => <StarOutlined style={{ ...style }} onClick={onClick} />;
// @ts-ignore
const UserItem = ({ id, name, isActive }) => {
  // @ts-ignore
  const { focusUsers, setFocusUsers } = useModel('home', (m) =>
    pick(m, 'focusUsers', 'setFocusUsers'),
  );
  const onClick = (status: string) => {
    const result = focusUsers.map((user: IFocusCustomer) => {
      if (user.id === id) {
        user.isActive = status !== 'active';
      }
      return user;
    });
    console.log('点击后的数据');
    console.log(result);
    setFocusUsers(result);
  };
  return (
    <>
      {isActive ? (
        <ActiveStarIcon onClick={() => onClick('active')} />
      ) : (
        <UnActiveStarIcon onClick={() => onClick('unActive')} />
      )}
      <Link to="" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
        {name}
      </Link>
    </>
  );
};

export default () => {
  // @ts-ignore
  const { focusUsers } = useModel('home', (m) => pick(m, 'focusUsers'));
  console.log('原始数据');
  console.log(focusUsers);
  return (
    <List
      dataSource={focusUsers}
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3,
      }}
      renderItem={(item: IFocusCustomer) => (
        <List.Item>
          <UserItem id={item.id} name={item.customerName} isActive={item.isActive} />
        </List.Item>
      )}
    />
  );
};
