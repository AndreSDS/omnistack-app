const generateUnicId = require('../../src/utils/generateUnicId');

describe('Generate Unique Id', ()=>{
    it('should be generate an unique id width 8 characters', ()=>{
        const id = generateUnicId();

        expect(id).toHaveLength(8);
    })
})