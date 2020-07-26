import m from 'mithril';

const User = {
  list: [],
  loadList: async () => {
    const result = await m.request({
      method: 'GET',
      url: 'https://rem-rest-api.herokuapp.com/api/users',
      withCredentials: true,
    });
    User.list = result.data;
  },
  current: {},
  load: async (id) => {
    const result = await m.request({
      method: 'GET',
      url: `https://rem-rest-api.herokuapp.com/api/users/${id}`,
      withCredentials: true,
    });
    User.current = result;
  },
  save: () =>
    m.request({
      method: 'PUT',
      url: 'https://rem-rest-api.herokuapp.com/api/users/' + User.current.id,
      body: User.current,
      withCredentials: true,
    }),
};

export default User;
