package com.example.Product_master_spring.Service;

import com.example.Product_master_spring.Model.SubCategory;
import com.example.Product_master_spring.Repositry.SubCategory_Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubCategory_Service {
    @Autowired
    SubCategory_Repo subCategoryRepo;

    public SubCategory savee(SubCategory subCategory) {
        // Query for SubCategory by its name
        SubCategory existingSubCategory = subCategoryRepo.findByCategory_name(subCategory.getSubCategory());

        if (existingSubCategory != null) {
            // If SubCategory with the same name already exists, return it
            return existingSubCategory;
        } else {
            subCategoryRepo.save(subCategory);
            // If SubCategory doesn't exist, save the new one
            return null;
        }
    }

    public List<SubCategory> get() {
        return subCategoryRepo.findAll();
    }

    public SubCategory Find(int id) {
return subCategoryRepo.findById(id).orElse(new SubCategory());
    }

    public Optional<SubCategory> getCategoryById(int id) {
        return subCategoryRepo.findById(id);
    }


    public SubCategory update(int id,SubCategory subCategory) {
        SubCategory s=subCategoryRepo.findById(id).orElse(new SubCategory());

        s.setActive(subCategory.getActive());
s.setCategory(subCategory.getCategory());
s.setSubCategory(subCategory.getSubCategory());
s.setDescription(subCategory.getDescription());
return subCategoryRepo.save(s);
    }

    public void save(SubCategory categoryToUpdate) {
        subCategoryRepo.save(categoryToUpdate);
    }
}
