package com.seokho_web.main.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class JoinController {
    @GetMapping("/test")
    public String Test(@RequestBody String str){
        return str + "정상";
    }

}
