package com.example.weblab3.management;

public interface RegisterMBean {

    int get_total();
    int get_missed();
    double get_ratio();
    void increment_total_points();
    void increment_missed_points();

    void sendNotification();

    void updateRatio();

}
