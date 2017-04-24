#ifndef POINT_H
#define POINT_H

class mPoint {
protected:

public:
	float x, y;
	int etat;
	mPoint (float nx, float ny) {
		x = nx;
		y = ny;
		etat = 0;
	}
};

#endif
