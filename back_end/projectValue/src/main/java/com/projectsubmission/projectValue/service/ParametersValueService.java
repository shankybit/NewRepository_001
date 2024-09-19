package com.projectsubmission.projectValue.service;

import com.projectsubmission.projectValue.entity.ParametersValue;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface ParametersValueService {

    ParametersValue savetheValues(ParametersValue parametervalue);

    Optional<ParametersValue> findByParametersValue(String parametersValue);

    List<ParametersValue> findAllTheServices();

    Optional<ParametersValue> findById(int id);

    void deleteParametersById(int id);

    public ParametersValue updateValueParameter(ParametersValue parametersValue);
}
