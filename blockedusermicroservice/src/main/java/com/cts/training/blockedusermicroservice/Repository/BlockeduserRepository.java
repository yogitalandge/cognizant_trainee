package com.cts.training.blockedusermicroservice.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.training.blockedusermicroservice.entity.Blockeduser;

public interface BlockeduserRepository extends JpaRepository<Blockeduser, Integer>{

}
