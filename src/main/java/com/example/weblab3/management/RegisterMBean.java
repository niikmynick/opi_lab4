package com.example.weblab3.management;

public interface RegisterMBean {

    public int get_total();
    public int get_missed();
    public void increment_total_points();
    public void increment_missed_points();

    public void sendNotification();

    public void setRatio();

}
