#include <vector>
#include <string>
#include <map>
#include <list>


#include <ros/ros.h>
#include <tf/tf.h>
#include <tf/transform_listener.h>

#include <nav_msgs/OccupancyGrid.h>
#include <nav_msgs/Path.h>
#include <geometry_msgs/PoseStamped.h>

#define TYPE_COOR_POINT int

#define WIN_SIZE 800
#define ROTATING_SPEED_COST 0.1

class Point;
class map;

enum Occupancy {FREE, OCCUPIED, UNKNOWN};
typedef std::vector<Occupancy> colonne;
typedef std::vector<Point>::iterator position_vec;

class Point {
public:
	TYPE_COOR_POINT x, y;
	double poids;
	position_vec pere;

	Point () { }
	Point (TYPE_COOR_POINT nx, TYPE_COOR_POINT ny) : x (nx), y(ny) { ; }
	bool operator==(const Point & a) {
		if (a.x == x && a.y == y) 
			return true;
		return false;
	}

	Point operator+(const Point & a) {
		return Point (x+a.x, y+a.y); 
	}
};

class Map {
protected:
	ros::NodeHandle nh_;
	ros::Subscriber og_sub_;
	ros::Subscriber target_sub_;
	ros::Publisher path_pub_;
	tf::TransformListener listener_;

		nav_msgs::MapMetaData info_;
		std::string frame_id_;
		std::string base_link_;

		unsigned int neighbourhood_;
		double robot_radius_;
		bool ready;
		bool debug;

	std::vector<colonne> map; 

public:
	void update_map (const nav_msgs::OccupancyGridConstPtr & msg) {
		nav_msgs::MapMetaData info = msg->info;
		map.resize (msg->info.width);
		for (int i = msg->info.width-1; i >= 0;++i)
			map[i].resize(msg->info.height);
		for (unsigned int i=0;i<msg->info.height;i++) {
			for (unsigned int j=0;j<msg->info.width;j++) {	
				int8_t v = msg->data[j*msg->info.width + i];
				switch (v) {
					case 0: 
						map[i][j] = FREE; 
						break;
					case 100: 
						map[i][j] = OCCUPIED; 
						break;
					case -1: 
					default:
						map[i][j] = UNKNOWN; 
						break;
				}
			}
		}
	}

	Map() : nh_("~") {
		int nbour = 4;
		//ready = false;
		nh_.param("robot_radius",robot_radius_,(double)1);
		nh_.param("base_frame",base_link_,std::string("/body"));
		nh_.param("debug",debug,false);
		nh_.param("neighbourhood",nbour,nbour); 
		og_sub_ = nh_.subscribe("occ_grid",1,&Map::update_map,this);
		target_sub_ = nh_.subscribe("goal",1,&Map::target_callback,this);
		path_pub_ = nh_.advertise<nav_msgs::Path>("path",1,true);
	}

	Occupancy at (int ligne, int colonne) {
		return map.at(ligne).at(colonne);
	}

	bool isInGrid(int x, int y) {
		if (x < map.size() && y < map[0].size())
			return true;
		return false;
	}

	void target_callback(const geometry_msgs::PoseStampedConstPtr & msg) {
	}
};

std::vector<Point> AStar (const map & m, const Point & depart, const Point & arrivee) {
	std::vector<Point> open_list, close_list;
	
	Point A, B;
	open_list.push_back (depart);
	A = depart;

	while (true);
};

int main(int argc, char * argv[]) {
	ros::init(argc,argv,"own_astar");
	Map ogp;
	while (ros::ok()) {
		ros::spinOnce(); 
	}
}


