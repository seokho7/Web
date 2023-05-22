package com.seokho_web.main.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {
    @GetMapping("/test")
    @ResponseBody
    public String main(){
        return "냐옹";
    }
}
