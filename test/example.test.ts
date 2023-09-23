function add(a: number,b: number): number {
    return a+b
}

describe('Example test', () => {
    it('should return a + b', () => {
        const a = 5
        const b = 8

        const suma = add(a,b)

        expect(suma).toEqual(13)        
    })
})