package com.example.Product_master_spring.Controller;


import com.example.Product_master_spring.Model.Login_dto;
import com.example.Product_master_spring.Model.Signupmodel;
import com.example.Product_master_spring.Service.SignupService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller

public class SignupController {

    @GetMapping("/signup")

public String sig(){
        return "Signup";
    }


    @Autowired
    SignupService signupService;




    @PostMapping("/CreateUser")
    public @ResponseBody void CreateUser(@RequestBody Signupmodel signupmodel) {

        signupService.save(signupmodel);
    }



//        @GetMapping("/logout")
//        public String logout(HttpServletRequest request) {
//            // Invalidate session and redirect to login page
//            HttpSession session = request.getSession(false);
//            if (session != null) {
//                session.invalidate();
//            }
//            return "redirect:/category_master.html";
//        }

}
