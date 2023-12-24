package com.example.restapi.repo;

import com.example.restapi.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MySqlRepository extends JpaRepository<Role, Integer> { }
