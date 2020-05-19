const Mock = require('mockjs');

export default {
  // 关注的客户列表
  'GET /api/index/focus-on-customer/list': (req, res) => {
    setTimeout(() => {
      res.send(
        Mock.mock({
          'data|6-10': [
            {
              'id|+1': 1,
              customerName: '@cname',
              customerType: '@integer(1, 3)',
              isActive: '@boolean',
            },
          ],
        }),
      );
    }, 500);
  },
};
