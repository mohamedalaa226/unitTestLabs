const { User } = require('../../../main')


describe("test add to cart function", function () {

    let client;

    beforeEach(function () {
        client = new User("Mohamed", "password123");
    });

    describe("calculateTotalCartPrice", function () {

        it("should return the total price of products ", function () {
            const product1 = { name: "Product 1", price: 10 };
            const product2 = { name: "Product 2", price: 20 };
            client.addToCart(product1);
            client.addToCart(product2);
            expect(client.cart.length).toEqual(2);
            expect(client.calculateTotalCartPrice()).toEqual(30);
        });
        it("should return 0 if the cart is empty", function () {
            expect(client.calculateTotalCartPrice()).toEqual(0);
        });
    });

});


describe('User', () => {
    let user;
    let paymentModel;

    beforeEach(() => {
        // initialize a new instance of User and mock paymentModel
        user = new User();
        paymentModel = {
            goToVerifyPage: jasmine.createSpy('goToVerifyPage'),
            returnBack: jasmine.createSpy('returnBack'),
            isVerify: jasmine.createSpy('isVerify')
        };
    });

    describe('checkout', () => {
        it('should call paymentModel methods', () => {
            user.checkout(paymentModel);
            expect(paymentModel.goToVerifyPage).toHaveBeenCalled();
            expect(paymentModel.returnBack).toHaveBeenCalled();
            expect(paymentModel.isVerify).toHaveBeenCalled();
        });

        it('should return true if payment is verified', () => {
            paymentModel.isVerify.and.returnValue(true);
            const result = user.checkout(paymentModel);
            expect(result).toBe(true);
        });

        it('should return false if payment is not verified', () => {
            paymentModel.isVerify.and.returnValue(false);
            const result = user.checkout(paymentModel);
            expect(result).toBe(false);
        });
    });
});
