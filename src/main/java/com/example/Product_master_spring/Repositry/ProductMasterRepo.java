package com.example.Product_master_spring.Repositry;

import com.example.Product_master_spring.Model.Product_Master;
import com.example.Product_master_spring.Model.SubCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.multipart.MultipartFile;

public interface ProductMasterRepo extends JpaRepository<Product_Master,Integer> {

//    @Query(value = "select * from product_master where product_name = :productName and active != 9 and category = :categoey  and sub_category = :subCategory",nativeQuery = true)
//    Product_Master productExist(@Param("productName")String productName,@Param("category")String category,@Param("subCategory")String subCategory);


    @Query(value = "select * from product_master where product_name = :productName and active != 9 and category = :category and sub_category = :subCategory",nativeQuery = true)
    Product_Master productExist(@Param("productName")String productName,@Param("category")String category,@Param("subCategory")String subCategory);

//    @Query(value = "SELECT * FROM product_master WHERE id = :id AND product_name = :productName AND active != 9 AND category = :category AND sub_category = :subCategory", nativeQuery = true)
//    Product_Master productExistWithId(@Param("id") int id, @Param("productName") String productName, @Param("category") String category, @Param("subCategory") String subCategory);

    @Query(value = "SELECT * FROM product_master WHERE product_name = ? And Active != '9'", nativeQuery = true)
    SubCategory findByP_name(String productName);


}
