package com.example.Product_master_spring.Controller;

import com.example.Product_master_spring.Model.Login_dto;
import com.example.Product_master_spring.Service.SignupService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class LoginController {

    @Autowired
    SignupService signupService;

    @Autowired
    HttpSession httpSession;

    @GetMapping("/login")
public String login(){
        httpSession.invalidate();
        return "Login";
    }

    @PostMapping("/login")
    public @ResponseBody String login(@RequestBody Login_dto loginDto) {


        String msg= signupService.Logiin(loginDto);
        System.out.println(msg);
        if ("success".equals(msg)){
            System.out.println("Success");
            httpSession.setAttribute("userEmail",loginDto.getEmail());
            System.out.println(loginDto.getEmail());

            return msg;
        }else {
            return  msg;
        }

    }


}
