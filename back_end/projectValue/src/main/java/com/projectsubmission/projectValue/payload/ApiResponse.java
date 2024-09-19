package com.projectsubmission.projectValue.payload;

import org.springframework.http.HttpStatus;

public class ApiResponse {

    private HttpStatus status;

    private int statuscode;

    private String message;

    public ApiResponse() {
    }

    public ApiResponse(HttpStatus status, int statuscode, String message) {
        this.status = status;
        this.statuscode = statuscode;
        this.message = message;
    }

    public HttpStatus getStatus() {
        return status;
    }

    public void setStatus(HttpStatus status) {
        this.status = status;
    }

    public int getStatuscode() {
        return statuscode;
    }

    public void setStatuscode(int statuscode) {
        this.statuscode = statuscode;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
