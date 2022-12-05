const Intern = require('../lib/Intern');

describe('Intern test', () => {
    it('Intern class creates corresponding name', () => {
        const intern = new Intern('', '11', '@gmail.com', '');
        expect(intern.getName()).toEqual('');
    });
    it('Intern class creates corresponding id', () => {
        const intern = new Intern('', '11', '@gmail.com', '');
        expect(intern.getId()).toEqual('11');
    });
    it('Intern class creates corresponding email', () => {
        const intern = new Intern('', '11', '@gmail.com', '');
        expect(intern.getEmail()).toEqual('@gmail.com');
    });
    it('Intern class creates corresponding school', () => {
        const intern = new Intern('', '11', '@gmail.com', '');
        expect(intern.getSchool()).toEqual('');
    });
})
