package com.projectsubmission.projectValue.entity;

import jakarta.persistence.*;

@Entity
@Table(name="data_parameters")
public class ParametersValue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String enteredValue;

    private float corefactors;

    private float effvolbycorevol;

    private float efflenbylenmagpath;

    private float effareabycrossarea;

    private float minareabycorearea;

    public ParametersValue() {
    }

    public ParametersValue(int id, String enteredValue, float corefactors, float effvolbycorevol, float efflenbylenmagpath, float effareabycrossarea, float minareabycorearea) {
        this.id = id;
        this.enteredValue = enteredValue;
        this.corefactors = corefactors;
        this.effvolbycorevol = effvolbycorevol;
        this.efflenbylenmagpath = efflenbylenmagpath;
        this.effareabycrossarea = effareabycrossarea;
        this.minareabycorearea = minareabycorearea;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEnteredValue() {
        return enteredValue;
    }

    public void setEnteredValue(String enteredValue) {
        this.enteredValue = enteredValue;
    }

    public float getCorefactors() {
        return corefactors;
    }

    public void setCorefactors(float corefactors) {
        this.corefactors = corefactors;
    }

    public float getEffvolbycorevol() {
        return effvolbycorevol;
    }

    public void setEffvolbycorevol(float effvolbycorevol) {
        this.effvolbycorevol = effvolbycorevol;
    }

    public float getEfflenbylenmagpath() {
        return efflenbylenmagpath;
    }

    public void setEfflenbylenmagpath(float efflenbylenmagpath) {
        this.efflenbylenmagpath = efflenbylenmagpath;
    }

    public float getEffareabycrossarea() {
        return effareabycrossarea;
    }

    public void setEffareabycrossarea(float effareabycrossarea) {
        this.effareabycrossarea = effareabycrossarea;
    }

    public float getMinareabycorearea() {
        return minareabycorearea;
    }

    public void setMinareabycorearea(float minareabycorearea) {
        this.minareabycorearea = minareabycorearea;
    }
}
