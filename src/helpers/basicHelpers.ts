//unused helper//
export const toWords = (num: number): string => {
    const words = [
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Nine',
        'Ten',
        'Eleven',
        'Twelve',
    ]
    return words[num -1] || ""
}