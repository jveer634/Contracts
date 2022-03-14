const Storage = artifacts.require("Storage");

contract("Storage", function () {
    before(async () => {
        store = await Storage.new(12);
    });

    it(".. should return the initial value", async () => {
        let x = await store.value();
        assert.equal(x, 12);
    });

    it(".. should update the value", async () => {
        await store.update(123);
        assert.equal(await store.value(), 123);
    });
});
