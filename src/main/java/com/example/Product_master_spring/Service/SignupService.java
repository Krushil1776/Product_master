package com.example.Product_master_spring.Service;

import com.example.Product_master_spring.Model.Login_dto;
import com.example.Product_master_spring.Model.Product_Master;
import com.example.Product_master_spring.Model.Signupmodel;
import com.example.Product_master_spring.Repositry.SignupRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SignupService {

    @Autowired
    SignupRepo signupRepo;

    public void save(Signupmodel signupmodel) {


        signupRepo.save(signupmodel);

    }


    public boolean Loginn(String email, String password) {
        Signupmodel s=signupRepo.findByEmail(email);

        if (s==null){
            return false;
        }
//        if (!password.equals(s.getPassword())){
//            return false;
//        }

        return true;
    }

    public String Logiin(Login_dto loginDto) {
        String l=loginDto.getEmail();

        Signupmodel s=signupRepo.findByEmail(l);

        if (s==null){
            return "false";
        }
        if (!s.getPassword().equals(loginDto.getPassword())){
            return "false";
        }
        return "success";


    }
}

