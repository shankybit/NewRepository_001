package com.projectsubmission.projectValue.repository;

import com.projectsubmission.projectValue.entity.ParametersValue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ParametersRepository extends JpaRepository<ParametersValue, Integer> {

    @Query(value = "SELECT u FROM ParametersValue u WHERE u.enteredValue IN :enteredValue")
    public ParametersValue findByEnteredValue(@Param("enteredValue") String enteredValue);

    public ParametersValue save(ParametersValue parametersValue);

    public List<ParametersValue> findAll();
}
