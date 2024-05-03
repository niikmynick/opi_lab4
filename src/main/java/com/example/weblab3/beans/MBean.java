package com.example.weblab3.beans;

import javax.management.MXBean;

@MXBean
public class MBean {
    private int total_points;
    private int missed_points;

    public MBean() {
        this.total_points = 0;
        this.missed_points = 0;
    }

    public int get_total() {
        return this.total_points;
    }

    public int get_missed() {
        return this.missed_points;
    }

    public void increment_total_points() {
        this.total_points += 1;
    }

    public void increment_missed_points() {
        this.missed_points += 1;
        System.out.println("Total missed : " + this.missed_points);
    }
}
