package com.example.restapi.controller.errors;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

public class ErrorResponse {
    private HttpStatus status;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyyMMdd hh:mm:ss")
    private LocalDateTime timeStamp;
    private String message;

    public ErrorResponse(HttpStatus status) {
        this.status = status;
    }

    public ErrorResponse(HttpStatus status, String message)
    {
        this();
        this.status = status;
        this.message = message;
    }

    public ErrorResponse()
    {
        timeStamp = LocalDateTime.now();
    }

    public ErrorResponse(HttpStatus status, LocalDateTime timeStamp, String message)
    {
        this.status = status;
        this.timeStamp = timeStamp;
        this.message = message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public HttpStatus getStatus() {
        return status;
    }

}
