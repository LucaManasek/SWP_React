
const words = [
    'bright', 'river', 'paper', 'garden', 'window', 'quiet',
    'mountain', 'silver', 'morning', 'pencil', 'cloud', 'forest'
];




const randomText = Array.from({ length: 3 }, () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}).join(' ');

const result = Array.from({ length: 3 }, (_, index: number) => {
    return "hans"
})


console.log(result.join('.'));