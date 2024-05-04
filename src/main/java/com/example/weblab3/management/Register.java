package com.example.weblab3.management;


import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;

@Named
@ApplicationScoped
public class Register implements RegisterMBean{
    private int total_points = 0;
    private int missed_points = 0;
    private double ratio = 0.0;

    @Override
    public int get_total() {
        return this.total_points;
    }

    @Override
    public int get_missed() {
        return this.missed_points;
    }

    @Override
    public double get_ratio() {
        return this.ratio;
    }

    @Override
    public void increment_total_points() {
        this.total_points += 1;
        this.updateRatio();
        System.out.println("Total points : " + this.total_points + " Ratio : " + this.ratio);
    }

    @Override
    public void increment_missed_points() {
        this.missed_points += 1;
        this.updateRatio();
        this.sendNotification();
        System.out.println("Total missed : " + this.missed_points);
    }

    @Override
    public void updateRatio() {
        this.ratio = (double) (this.total_points - this.missed_points) / this.total_points * 100;
    }

    @Override
    public void sendNotification() {
        System.out.println("Point is out of bounds");
    }
}
