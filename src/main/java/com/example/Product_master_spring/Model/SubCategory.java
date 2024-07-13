package com.example.Product_master_spring.Model;


import com.example.Product_master_spring.Repositry.Category;
import com.fasterxml.jackson.core.sym.Name;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Data
@Entity
public class SubCategory {


    @Id
            @GeneratedValue(strategy = GenerationType.IDENTITY)
     private    int id;
    private String  Category;
    private  String Description;
    private  String SubCategory;
    private  int active;

}
