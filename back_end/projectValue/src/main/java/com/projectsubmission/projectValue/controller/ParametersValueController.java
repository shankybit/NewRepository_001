package com.projectsubmission.projectValue.controller;

import com.projectsubmission.projectValue.entity.ParametersValue;
import com.projectsubmission.projectValue.exceptions.ResourceNotFoundException;
import com.projectsubmission.projectValue.service.ParametersValueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")
public class ParametersValueController {

    private ParametersValueService parametersValueService;

    @Autowired
    public ParametersValueController(ParametersValueService theparametersValueService){
        this.parametersValueService = theparametersValueService;
    }

    @PostMapping("/entervalue")
    public ParametersValue saveTheEnteredValues(@RequestBody ParametersValue parametersvalue){
        return parametersValueService.savetheValues(parametersvalue);
    }

    @GetMapping("/findvalue")
    public ParametersValue findTheValue(@RequestParam("enteredvalue") String enteredvalue){
        Optional<ParametersValue> valueServices = parametersValueService.findByParametersValue(enteredvalue);
        ParametersValue paramval = null;
        if(valueServices.isPresent()){
            paramval = valueServices.get();
        }else{
            throw new ResourceNotFoundException("Cannot find any such value");
        }
        return paramval;
    }

    @GetMapping("/findallvalues")
    public List<ParametersValue> findAllTheValues(){
        return parametersValueService.findAllTheServices();
    }

    @PutMapping("/findvalue/{id}")
    public ParametersValue updateTheValue(@RequestBody ParametersValue parametersValue){
        return parametersValueService.updateValueParameter(parametersValue);
    }

    @DeleteMapping("/{id}")
    public void deleteTheValue(@PathVariable("id") int id){
        Optional<ParametersValue> paramval = parametersValueService.findById(id);
        if(paramval.isPresent()) {
            parametersValueService.deleteParametersById(id);
        }else{
            throw new ResourceNotFoundException("Idee Not Found");
        }
    }
}
