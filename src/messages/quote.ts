export type Quote = {
    message: string
    author: string
}

function createQuote(message: string, author: string): Quote {
    return { message, author }
}

export const quotes: Quote[] = [
    createQuote(
        'おまえは今まで食ったパンの枚数をおぼえているのか？',
        'ジョジョ一部：ディオ・ブランドー',
    ),
    createQuote(
        '人間は誰でも不安や恐怖を克服して安心を得るために生きる',
        'ジョジョ三部：ディオ・ブランドー',
    ),
    createQuote(
        'だが断る',
        'ジョジョ四部：岸辺露伴',
    ),
    createQuote(
        'なるほど完璧な作戦っスねーっ 不可能だという点に目をつぶればよぉ〜',
        'ジョジョ四部：東方仗助',
    ),
    createQuote(
        '吐き気をもよおす『邪悪』とはッ！ なにも知らぬ無知なる者を利用する事だ……!!',
        'ジョジョ五部：ブローノ・ブチャラティ',
    ),
    createQuote(
        '大切なのは『真実に向かおうとする意志』だと思っている。',
        'ジョジョ五部：アバッキオの元同僚の警官',
    ),
    createQuote(
        'おまえは……自分が『悪』だと気づいていない…もっともドス黒い『悪』だ…',
        'ジョジョ六部：ウェザー・リポート',
    ),
    createQuote(
        '『一番の近道は遠回りだった』『遠回りこそが俺の最短の道だった』',
        'ジョジョ七部：ジャイロ・ツェペリ',
    ),
]
