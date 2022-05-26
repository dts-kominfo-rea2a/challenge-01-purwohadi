const { users } = require("./index");

describe("users - color & restaurant", () => {
	it("should have unique favorite color attribute at first row", async () => {    
		expect(users[0][0].favoriteColor.length).toBe(4)
		expect(users[1][0].favoriteColor.length).toBe(3)
	});
	
	it("should have unique favorite restaurant attribute at first row", async () => {    
		expect(users[0][0].favoriteRestaurant.length).toBe(7);
		expect(users[1][0].favoriteRestaurant.length).toBe(8);
	});
});

