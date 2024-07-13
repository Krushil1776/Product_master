package com.example.Product_master_spring.Repositry;

import com.example.Product_master_spring.Model.Category_master;
import com.example.Product_master_spring.Model.SubCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.naming.Name;
import java.util.List;

public interface Category extends JpaRepository<Category_master,Integer> {

    @Query(value = "SELECT * FROM category_master WHERE name = ? And Active != '9'", nativeQuery = true)
    Category_master cate(String Name);
}
