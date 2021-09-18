input.onButtonPressed(Button.A, function () {
    홀짝 = 0
})
input.onButtonPressed(Button.B, function () {
    홀짝 = 1
})
// 홀짝게임 
// 방법 : 점 개수가 홀수이면 A버튼, 짝수이면 B버튼을 누른다.
// 게임 횟수 : 10번
// 제한 시간 : 3초  (짧게해서 게임 LEVEL 높이기)
// 
let 리스트 = 0
let xy값 = 0
let y = 0
let x = 0
let 홀짝 = 0
let 정답 = 0
let 점개수 = 0
let 맞춘개수 = 0
music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
for (let index = 0; index < 10; index++) {
    점개수 = 0
    정답 = -1
    홀짝 = -1
    for (let index = 0; index < randint(1, 16); index++) {
        let list: number[] = []
        x = randint(0, 4)
        y = randint(0, 4)
        xy값 = x * 10 + y
        if (list.indexOf(xy값) == -1) {
            점개수 += 1
            if (점개수 == 1) {
                리스트 = xy값
            } else {
                list.push(xy값)
            }
            led.plot(x, y)
        }
    }
    if (점개수 % 2 == 0) {
        정답 = 1
    } else {
        정답 = 0
    }
    basic.pause(3000)
    if (정답 == 홀짝) {
        music.playMelody("C E G C5 - - - - ", 344)
        맞춘개수 += 1
    } else {
        music.playMelody("- - - - - - - C5 ", 344)
    }
    basic.clearScreen()
}
if (7 <= 맞춘개수) {
    basic.showIcon(IconNames.Happy)
} else {
    basic.showIcon(IconNames.Sad)
}
basic.pause(1000)
basic.showNumber(맞춘개수)
