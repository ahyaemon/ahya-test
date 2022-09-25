import {replace} from "./string";

describe('replace', () => {

    test('no replacing', () => {
        expect(replace("test")).toBe("test")
    })

    test('one replacing', () => {
        expect(replace("test $$", "dog")).toBe("test dog")
    })

    test('two replacing', () => {
        expect(replace("test $$ $$", "dog", "cat")).toBe("test dog cat")
    })
})
