import {
      SET_USER_PURCHASES
} from './types';
  
export function fetchUserPurchases() {
      return ({
            type: SET_USER_PURCHASES,
            payload: [
                  
                  {
                        _id: 0,
                        total: 19.40,
                        orderNumber: 'A2849834',
                        orderDate: new Date(),
                        creditCard: '-0000',
                        user: {
                              name: 'Delphia Rose',
                              shippingAddress: '1234 west stat' 
                        }
                  },
                  {
                        _id: 1,
                        total: 17.01,
                        orderNumber: 'A284988543',
                        orderDate: new Date(),
                        creditCard: '-0000',
                        user: {
                              name: 'Jordan Park',
                              shippingAddress: '124 East stat' 
                        }
                  },
                  {
                        _id: 2,
                        total: 13.70,
                        orderNumber: 'B88JGDCN34',
                        orderDate: new Date(),
                        creditCard: '-010',
                        user: {
                              name: 'Drew Kim',
                              shippingAddress: '234 south state' 
                        }
                  },
                  {
                        _id: 3,
                        total: 29.20,
                        orderNumber: 'H394JFSS75',
                        orderDate: new Date(),
                        creditCard: '-0020',
                        user: {
                              name: 'David Valdy',
                              shippingAddress: '34 ouest stat' 
                        }
                  },
                  {
                        _id: 4,
                        total: 15.00,
                        orderNumber: 'A28KFSK434',
                        orderDate: new Date(),
                        creditCard: '-0220',
                        user: {
                              name: 'Lucien Mouche',
                              shippingAddress: '934 south state' 
                        }
                  },
                  {
                        _id: 5,
                        total: 9.89,
                        orderNumber: '9849KFB3380',
                        orderDate: new Date(),
                        creditCard: '-0090',
                        user: {
                              name: 'John McWell',
                              shippingAddress: '1230 east state' 
                        }
                  },
                  {
                        _id: 6,
                        total: 10.45,
                        orderNumber: 'H3ONRDCV94',
                        orderDate: new Date(),
                        creditCard: '-0055',
                        user: {
                              name: 'Susan Cruch',
                              shippingAddress: '9074 west state' 
                        }
                  },
                  {
                        _id: 7,
                        total: 18.34,
                        orderNumber: 'A28HVXP043',
                        orderDate: new Date(),
                        creditCard: '-011',
                        user: {
                              name: 'Max Dubois',
                              shippingAddress: '1204 west stat' 
                        }
                  },
                  
            ]
      })
}