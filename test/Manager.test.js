const Manager = require('../lib/Manager');

describe('Manager test', () => {
    it('Manager class creates corresponding office number', () => {
        const manager = new Manager('', '', '@gmail.com', 5);
        expect(manager.getOfficeNumber()).toEqual(5);
    });    
    it('Manager class creates corresponding name', () => {
        const manager = new Manager('', '', '@gmail.com', 5);
        expect(manager.getName()).toEqual('');
    });
    it('Manager class creates corresponding id', () => {
        const manager = new Manager('', '', '@gmail.com', 5);
        expect(manager.getId()).toEqual('11');
    });
    it('Manager class creates corresponding email', () => {
        const manager = new Manager('', '', '@gmail.com', 5);
        expect(manager.getEmail()).toEqual('@gmail.com');
    });
})
