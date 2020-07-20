
const getDistance = ( point1, point2 ) => {
  let xs = 0;
  let ys = 0;
 
  xs = point2.X - point1.X;
  xs = xs * xs;
 
  ys = point2.Y - point1.Y;
  ys = ys * ys;
 
  return Math.sqrt( xs + ys );
}

const getAngleFromPoint = (point, centerPoint) => {
	let dy = (point.Y - centerPoint.Y),
		dx = (point.X - centerPoint.X);
	let theta = Math.atan2(dy, dx);
	let angle = (((theta * 180) / Math.PI)) % 360;
	angle = (angle<0) ? 360+angle : angle;
	return angle;
};

const getAngleByLegs = (leg1, leg2) => {
  return ( Math.atan(leg1/leg2) * 180) / Math.PI;
}

export {
    getDistance,
    getAngleFromPoint,
    getAngleByLegs
};