package com.example.Product_master_spring.Model;


import jakarta.persistence.*;
import lombok.Data;
import lombok.Generated;

@Data
@Entity
public class Signupmodel {



@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)

    private int id;
    private String name;
    private String email;
    private String password;
}
