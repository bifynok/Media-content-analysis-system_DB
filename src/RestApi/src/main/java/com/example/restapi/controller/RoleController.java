package com.example.restapi.controller;

import com.example.restapi.model.Role;
import com.example.restapi.repo.MySqlRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.datasource.AbstractDriverBasedDataSource;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
public class RoleController {

    @Autowired
    MySqlRepository mySqlRepository;

    // GET
    @GetMapping("/get-all-roles")
    public List<Role> getAllRoles() {
        return mySqlRepository.findAll();
    }

    @GetMapping("/get-role/{id}")
    public Role getRole(@PathVariable("id") Integer id) {
        return mySqlRepository.findById(id).get();
    }

    // DELETE
    @DeleteMapping("/remove/{id}")
    public boolean deleteRow(@PathVariable("id") Integer id) {
        if(!mySqlRepository.findById(id).equals(Optional.empty())) {
            mySqlRepository.deleteById(id);
            return true;
        }
        return false;
    }

    // PUT
    @PutMapping("/update/{id}")
    public Role updateRole(@PathVariable("id") Integer id,
                           @RequestBody Map<String, String> body)
    {
        Role current  = mySqlRepository.findById(id).get();
        current.setName(body.get("name"));
        current.setDescription(body.get("description"));
        mySqlRepository.save(current);
        return current;
    }

    // POST
    @PostMapping("/add")
    public Role create(@RequestBody Map<String, String> body)
    {
        String name = body.get("name");
        String description = body.get("description");
        Role newRole = new Role(name, description);

        return mySqlRepository.save(newRole);
    }

}













