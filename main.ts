controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    servos.P0.setAngle(0)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    servos.P0.setAngle(180)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    servos.P0.setAngle(270)
})
