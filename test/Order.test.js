const orderModel = require('./../models/order');

describe('Order Endpoints', () => {
    describe('Get:', () => {
        it('GetAll Orders', () => {
            const testGet = () =>{

            }
        })
    })

    describe('Post:', () => {
        it('Create Order', async () => {

            const postData = {
                body: {
                    user_id: 1,
                    delivery_address: 'test_address',
                    delivery_date: 'test_date',
                    time_duration: '01/31/2020'
                }                
            };

            expect(orderModel.createOrders(postData)).toEqual([])

        })
    })
})