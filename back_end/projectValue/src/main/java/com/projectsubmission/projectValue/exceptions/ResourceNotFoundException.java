package com.projectsubmission.projectValue.exceptions;

import jakarta.annotation.Resource;

public class ResourceNotFoundException extends RuntimeException{

    public ResourceNotFoundException(){
        super("Not Found Exception");
    }

    public ResourceNotFoundException(String message){
        super(message);
    }
}
