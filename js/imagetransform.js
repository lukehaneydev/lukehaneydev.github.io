//  The following two numbers define the angles (in degrees)
//  that the transformation area will be rotated at about
//  X and Y axes when the cursor reaches the right (for Y) 
//  and the top (for X) borders of the tracking area.
var maxRotationDegreesX = 30;
var maxRotationDegreesY = 30;

//  This effectively defines the distance along X axis between
//  the reference point and the projection plane. The greater the 
//  number, the greater the transformation area's projection
//  is deformed due to perspective.
var perspectivePx = 600;

$(document).ready(function () {   
	//  These variables are requried to translate screen coordinates 
	//  supplied by mouse event into the coordinate system with 
	//  its reference point placed in the center of the tracking area.



	
	$('.tracking-area').each(function() {
		$(this).on("mousemove", function () {
			
			var trackingAreaShiftX = $(this).offset().left;
			var trackingAreaShiftY = $(this).offset().top;

			var halfTrackingAreaWidth = $(this).width() / 2;
			var halfTrackingAreaHeight = $(this).height() / 2;
			
			var mouseCoordinateCorrectionX = trackingAreaShiftX + halfTrackingAreaWidth;
			var mouseCoordinateCorrectionY = trackingAreaShiftY + halfTrackingAreaHeight;
			//  Translate cooridnates of the mouse ponter 
			var x = event.clientX - mouseCoordinateCorrectionX;
			var y = event.clientY - mouseCoordinateCorrectionY;
			//  Calculate degrees of rotation with respect to their maximum values
			var rotationY = x * maxRotationDegreesX / halfTrackingAreaWidth;
			var rotationX = -y * maxRotationDegreesY / halfTrackingAreaHeight;
			//  Construct CSS transform setting string
			var transform = `perspective(${perspectivePx}px) rotate3d(1, 0, 0, ${rotationX}deg) rotate3d(0, 1, 0, ${rotationY}deg)`;
			//  Apply the transformation
			
			
			var transformer = $(this).find('.transformation-area');
			$(transformer).css("-webkit-transform", transform);
			$(transformer).css("-moz-transform", transform);
			$(transformer).css("-ms-transform", transform);
			$(transformer).css("-o-transform", transform);
			$(transformer).css("transform", transform);
		});
	});
	
	$('.tracking-area').each(function() {
		$(this).on("mouseleave", function () {
			//  Construct CSS transform setting string
			var transformOut = `perspective(${perspectivePx}px) rotate3d(1, 0, 0, 0) rotate3d(0, 1, 0, 0`;
			//  Apply the transformation
			$(".transformation-area").css("-webkit-transform", transformOut);
			$(".transformation-area").css("-moz-transform", transformOut);
			$(".transformation-area").css("-ms-transform", transformOut);
			$(".transformation-area").css("-o-transform", transformOut);
			$(".transformation-area").css("transform", transformOut);
		});
	});
	
});