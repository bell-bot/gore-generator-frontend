import {validateRadius} from "@/form-validators/validateRadius";

describe('validateRadius', () => {
    it('Returns true for positive integer', () => {
        expect(validateRadius('100')).toBe(true);
    })

    it('Returns true for positive rational number', () => {
        expect(validateRadius('35.690047920')).toBe(true);
    })

    it('Returns false for negative integer', () => {
        expect(validateRadius('-129')).toBe(false);
    })

    it('Returns false for negative rational number', () => {
        expect(validateRadius('-129.9797')).toBe(false);
    })

    it('Returns false for zero', () => {
        expect(validateRadius('0')).toBe(false);
    })
})