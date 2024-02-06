enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Cristax = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.setGameOverEffect(false, effects.dissolve)
    game.setGameOverMessage(false, "recomence")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Cristax, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Balls.vy == 0) {
        Balls.vy += -125
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    scene.setBackgroundColor(9)
    tiles.setCurrentTilemap(tilemap`niveau2`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Balls,
    [img`
        . . . . a a a a a e . . . . . . 
        . . . a a a a d a a e . . . . . 
        . . e a a a a a a a e . . . . . 
        . . e a a a a a a a e . . . . . 
        . . e a a a a a e f f c c . . . 
        . . e e a a e f f f f b c . . . 
        . e e e f e a b f f f d c . . . 
        e e a a d f a 1 1 1 1 b c . . . 
        e e a a d f e e c c c . . . . . 
        b 1 1 d e a a e e c . . . . . . 
        . f f e a a a a e . . . . . . . 
        . . f f d d a a f f d d . . . . 
        . . f f d d e e f f d d . . . . 
        . . . f f f f . . . . . . . . . 
        . . e e e f f f . . . . . . . . 
        . . e e e e f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a a e . . . . 
        . . . . . a a a a d a a e . . . 
        . . . . e a a a a a a a e . . . 
        . . . . e a a a a a a a e . . . 
        . . . . e a a a a a e f f c c . 
        . . . . e e a a e f f f f b c . 
        . . . e e e f e a b f f f d c . 
        . . e e a a d f a 1 1 1 1 b c . 
        . . e e a a d f e e c c c . . . 
        . . b 1 1 d e a e e c . . . . . 
        . . f f f f d d f . . . . . . . 
        f f f f f f d d . . . . . . . . 
        f f f . f f f e . . . . . . . . 
        f f . . . . e e e . . . . . . . 
        . . . . . . e e e e . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a a e . . . . 
        . . . . . a a a a d a a e . . . 
        . . . . e a a a a a a a e . . . 
        . . . . e a a a a a a a e . . . 
        . . . . e a a a a a e f f c c . 
        . . . . e e a a e f f f f b c . 
        . . e e e f e a a b f f f d c . 
        . e e a a d f e a 1 1 1 1 b c . 
        . e e a a d f e e e c c c . . . 
        . b 1 1 e e a a e e c . . . . . 
        . . f d d a a a f f f d d . . . 
        e e f d d e e e . f f d d . . . 
        e e e f f f f f . . . . . . . . 
        e e . . . . f f f . . . . . . . 
        . . . . . . f f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . a a a a a e . . . 
        . . . . . . a a a a d a a e . . 
        . . . . . e a a a a a a a e . . 
        . . . . . e a a a a a a a e . . 
        . . . . . e a a a a a e f f c c 
        . . . . . e e a a e f f f f b c 
        . . . e e e f e a a b f f f d c 
        . . e e a a d f e a 1 1 1 1 b c 
        . . e e a a d f e e e c c c . . 
        . . b 1 1 d e a a e e c . . . . 
        . . . f f f d d a a f d d . . . 
        . . . . f f d d e e f d d . . . 
        . . . . . f f f f f . . . . . . 
        . . . . e e e f f . . . . . . . 
        . . . . e e e e f f . . . . . . 
        `],
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Balls,
    [img`
        . . . . . . e a a a a a . . . . 
        . . . . . e a a d a a a a . . . 
        . . . . . e a a a a a a a e . . 
        . . . . . e a a a a a a a e . . 
        . . . c c f f e a a a a a e . . 
        . . . c b f f f f e a a e e . . 
        . . . c d f f f b a e f e e e . 
        . . . c b 1 1 1 1 a f d a a e e 
        . . . . . c c c e e f d a a e e 
        . . . . . . c e e a a e d 1 1 b 
        . . . . . . . e a a a a e f f . 
        . . . . d d f f a a d d f f . . 
        . . . . d d f f e e d d f f . . 
        . . . . . . . . . f f f f . . . 
        . . . . . . . . f f f e e e . . 
        . . . . . . . f f f e e e e . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . e a a a a a . . . . . . 
        . . . e a a d a a a a . . . . . 
        . . . e a a a a a a a e . . . . 
        . . . e a a a a a a a e . . . . 
        . c c f f e a a a a a e . . . . 
        . c b f f f f e a a e e . . . . 
        . c d f f f b a e f e e e . . . 
        . c b 1 1 1 1 a f d a a e e . . 
        . . . c c c e e f d a a e e . . 
        . . . . . c e e a e d 1 1 b . . 
        . . . . . . . f d d f f f f . . 
        . . . . . . . . d d f f f f f f 
        . . . . . . . . e f f f . f f f 
        . . . . . . . e e e . . . . f f 
        . . . . . . e e e e . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . e a a a a a . . . . . . 
        . . . e a a d a a a a . . . . . 
        . . . e a a a a a a a e . . . . 
        . . . e a a a a a a a e . . . . 
        . c c f f e a a a a a e . . . . 
        . c b f f f f e a a e e . . . . 
        . c d f f f b a a e f e e e . . 
        . c b 1 1 1 1 a e f d a a e e . 
        . . . c c c e e e f d a a e e . 
        . . . . . c e e a a e e 1 1 b . 
        . . . d d f f f a a a d d f . . 
        . . . d d f f . e e e d d f e e 
        . . . . . . . . f f f f f e e e 
        . . . . . . . f f f . . . . e e 
        . . . . . . f f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . e a a a a a . . . . . . . 
        . . e a a d a a a a . . . . . . 
        . . e a a a a a a a e . . . . . 
        . . e a a a a a a a e . . . . . 
        c c f f e a a a a a e . . . . . 
        c b f f f f e a a e e . . . . . 
        c d f f f b a a e f e e e . . . 
        c b 1 1 1 1 a e f d a a e e . . 
        . . c c c e e e f d a a e e . . 
        . . . . c e e a a e d 1 1 b . . 
        . . . d d f a a d d f f f . . . 
        . . . d d f e e d d f f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f e e e . . . . 
        . . . . . . f f e e e e . . . . 
        `],
    200,
    true
    )
})
let Cristax: Sprite = null
let Balls: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`niveau1`)
Balls = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . a a a a a e . . . 
    . . . . . . a a a a d a a e . . 
    . . . . . e a a a a a a a e . . 
    . . . . . e a a a a a a a e . . 
    . . . . . e a a a a a e f f c c 
    . . . . . e e a a e f f f f b c 
    . . . e e e f e a a b f f f d c 
    . . e e a a d f e a 1 1 1 1 b c 
    . . e e a a d f e e e c c c . . 
    . . b 1 1 d e a a e e c . . . . 
    . . . f f f d d a a f d d . . . 
    . . . . f f d d e e f d d . . . 
    . . . . . f f f f f . . . . . . 
    . . . . e e e f f . . . . . . . 
    . . . . e e e e f f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Balls, 100, 0)
Balls.ay = 150
scene.cameraFollowSprite(Balls)
for (let valeur of tiles.getTilesByType(assets.tile`myTile6`)) {
    Cristax = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . 8 9 8 . . . . . . . 
        . . . . . 8 9 9 9 8 . . . . . . 
        . . . . 8 9 9 1 1 9 8 . . . . . 
        . . . . 8 9 9 9 1 9 8 . . . . . 
        . . . . 8 6 9 9 9 9 8 . . . . . 
        . . . . 8 6 9 9 9 9 8 . . . . . 
        . . . . 8 6 9 9 9 9 8 . . . . . 
        . . . . 8 6 9 9 9 9 8 . . . . . 
        . . . . 8 6 9 9 9 9 8 . . . . . 
        . . . . 8 6 6 9 9 9 8 . . . . . 
        . . . . . 8 6 6 9 8 . . . . . . 
        . . . . . . 8 6 8 . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Cristax)
    animation.runImageAnimation(
    Cristax,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 8 . . . . . . . 
        . . . . . . . 8 9 8 . . . . . . 
        . . . . . . 8 9 9 9 8 . . . . . 
        . . . . . 8 9 9 1 1 9 8 . . . . 
        . . . . . 8 6 9 9 1 9 8 . . . . 
        . . . . . 8 6 9 9 9 9 8 . . . . 
        . . . . . 8 6 9 9 9 9 8 . . . . 
        . . . . . 8 6 9 9 9 9 8 . . . . 
        . . . . . 8 6 9 9 9 9 8 . . . . 
        . . . . . 8 6 9 9 9 9 8 . . . . 
        . . . . . 8 6 6 9 9 9 8 . . . . 
        . . . . . . 8 6 6 9 8 . . . . . 
        . . . . . . . 8 6 8 . . . . . . 
        . . . . . . . . 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . 8 9 8 . . . . . . . 
        . . . . . 8 9 9 9 8 . . . . . . 
        . . . . 8 9 9 1 1 9 8 . . . . . 
        . . . . 8 6 9 9 1 9 8 . . . . . 
        . . . . 8 6 9 9 9 9 8 . . . . . 
        . . . . 8 6 9 9 9 9 8 . . . . . 
        . . . . 8 6 9 9 9 9 8 . . . . . 
        . . . . 8 6 9 9 9 9 8 . . . . . 
        . . . . 8 6 9 9 9 9 8 . . . . . 
        . . . . 8 6 6 9 9 9 8 . . . . . 
        . . . . . 8 6 6 9 8 . . . . . . 
        . . . . . . 8 6 8 . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    tiles.placeOnTile(Cristax, valeur)
    tiles.setTileAt(valeur, assets.tile`transparency16`)
}
