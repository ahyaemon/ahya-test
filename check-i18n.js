const fs = require('fs')
const glob = require('glob');

const invalidLetters = `
    あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽぁぃぅぇぉっ
    アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポァィゥェォッ
    犬猫
`.replaceAll(/\s/g, '').split('')

const getFilePathList = (extension) => glob(`src/**/*.${extension}`, { sync: true })
    .filter(p => { return p.indexOf('i18n.ts') < 0 })

const hasInvalidLetters = (filePath) => {
    const content = fs.readFileSync(filePath, { encoding: 'utf8' })
    for (const l of invalidLetters) {
        if (content.indexOf(l) >= 0) {
            return true
        }
    }
    return false
}

function getInvalidFilePaths() {
    const tsFilePathList = getFilePathList('ts')
    const tsxFilePathList = getFilePathList('tsx')
    return [...tsFilePathList, ...tsxFilePathList].filter(hasInvalidLetters)
}

getInvalidFilePaths().forEach(p => console.log(p))
