package com.projectsubmission.projectValue.service;

import com.projectsubmission.projectValue.entity.ParametersValue;
import com.projectsubmission.projectValue.exceptions.ResourceNotFoundException;
import com.projectsubmission.projectValue.repository.ParametersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ParametersValueServiceImpl implements ParametersValueService{

    private ParametersRepository parametersRepository;

    @Autowired
    public ParametersValueServiceImpl(ParametersRepository theparametersRepository){
        this.parametersRepository = theparametersRepository;
    }

    @Override
    public ParametersValue savetheValues(ParametersValue parametervalue) {
        return parametersRepository.save(parametervalue);
    }

    @Override
    public Optional<ParametersValue> findByParametersValue(String parametersValue) {
        return Optional.ofNullable(parametersRepository.findByEnteredValue(parametersValue));
    }

    @Override
    public List<ParametersValue> findAllTheServices(){
        return parametersRepository.findAll();
    }

    @Override
    public void deleteParametersById(int id) {
        parametersRepository.deleteById(id);
    }

    @Override
    public ParametersValue updateValueParameter(ParametersValue parametersValue) {
        ParametersValue prmval = parametersRepository.save(parametersValue);
        return prmval;
    }

    @Override
    public Optional<ParametersValue> findById(int id){
        return parametersRepository.findById(id);
    }

}
