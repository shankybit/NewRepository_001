package com.projectsubmission.projectValue.exceptions;

import com.projectsubmission.projectValue.payload.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    ResponseEntity<ApiResponse> exceptionHandler(ResourceNotFoundException ex){
        ApiResponse response = new ApiResponse();
        response.setMessage(ex.getMessage());
        response.setStatus(HttpStatus.NOT_FOUND);
        response.setStatuscode(response.getStatus().value());

        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }
}
