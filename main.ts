let n = 0
let sum = 0
for (let n = 0; n <= 10; n++) {
    if (n % 2 == 0) {
        game.splash(n)
        sum += n
    }
}
game.splash("Sum of all the even number", sum)
