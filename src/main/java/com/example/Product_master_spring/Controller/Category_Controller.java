package com.example.Product_master_spring.Controller;

import com.example.Product_master_spring.Model.Category_master;
import com.example.Product_master_spring.Model.SubCategory;
import com.example.Product_master_spring.Service.Category_Service;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Controller
//@RequestMapping("/Category")

public class Category_Controller {

    @Autowired
    Category_Service categoryService;

@GetMapping("/Categoryy")
public String get(){
    return "category";
}





@GetMapping("/checkSession")
public String checkSession(HttpSession httpSession) {
    if (httpSession.getAttribute("userEmail") != null) {
        System.out.println("User is logged in, redirecting to Categoryy");
        return "redirect:/Categoryy"; // Redirect to category page if user is logged in

    } else {
        System.out.println("User is not logged in, redirecting to login");
        return "redirect:/Login"; // Redirect to index page if user is not logged in
 // Redirect to index page if user is not logged in
    }
}




//    @PostMapping("/Add")
//    public @ResponseBody void addCategory(@RequestBody Category_master categoryMaster) {
//        categoryService.Addcate(categoryMaster);
//    }

    @PostMapping("/Add")
    public ResponseEntity<?> add(@RequestBody Category_master subCategory) {
        try {
            Category_master savedSubCategory = categoryService.saveee(subCategory);
            if (savedSubCategory != null) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Sub-Category already exists");
            }
            return ResponseEntity.ok(savedSubCategory);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to save subcategory: " + e.getMessage());
        }
    }

    @GetMapping("/getTable")
    public @ResponseBody List<Category_master> GetAllTable() {
        System.out.println("hii");
        return categoryService.getTable();

    }   

    @PutMapping("/Update/{categoryId}")
    public @ResponseBody void UpdateCategory(@PathVariable int categoryId, @RequestBody Category_master categoryMaster) {
        Optional<Category_master> existingCategory = categoryService.getCategoryById(categoryId);
        if (existingCategory.isPresent()) {
            Category_master categoryToUpdate = existingCategory.get();
            categoryToUpdate.setActive(9);

            categoryService.Addcate(categoryToUpdate); // Save the updated category
        } else {
            System.out.printf("not fount id ");

        }
    }


    @PutMapping("/Updatee/{id}")
    public @ResponseBody Category_master updateCategory(@PathVariable int id, @RequestBody Category_master updatedCategory) {
        return categoryService.updateCategory(id, updatedCategory);

    }


}






