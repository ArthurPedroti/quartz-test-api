export default {
  routes: [
    {
      method: 'GET',
      path: '/protheus-orders',
      handler: 'protheus-order.index',
      config: {
        policies: [],
        middlewares: []
      }
    },
    {
      method: 'PUT',
      path: '/protheus-orders',
      handler: 'protheus-order.update',
      config: {
        policies: [],
        middlewares: []
      }
    }
  ]
}
