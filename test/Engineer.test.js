const Engineer = require('../lib/Engineer');

describe('Engineer test', () => {
    it('Engineer class creates corresponding name', () => {
        const engineer = new Engineer('', '11', '@gmail.com', '');
        expect(engineer.getName()).toEqual('');
    });
    it('Engineer class creates corresponding id', () => {
        const engineer = new Engineer('', '11', '@gmail.com', '');
        expect(engineer.getId()).toEqual('11');
    });
    it('Engineer class creates corresponding email', () => {
        const engineer = new Engineer('', '11', '@gmail.com', '');
        expect(engineer.getEmail()).toEqual('@gmail.com');
    });
    it('the github entered is a string', () => {
        const engineer = new Engineer('', '11', '@gmail.com', '');
        expect(engineer.getGithub()).toEqual('');
    });
    })
