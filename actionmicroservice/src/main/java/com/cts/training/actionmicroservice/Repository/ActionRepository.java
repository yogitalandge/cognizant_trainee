package com.cts.training.actionmicroservice.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.training.actionmicroservice.entity.Action;

public interface ActionRepository extends JpaRepository<Action, Integer>{

}
