package com.seokho_web.main.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.seokho_web.main.dto.MemberDto;
import com.seokho_web.main.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.json.GsonJsonParser;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;
    @GetMapping("/")
    public String Home(){
        return "Home";
    }

//    @GetMapping("/members/new")
//    public String createMemberForm(){
//        return  "members/createMemberForm";
//    }

    @PostMapping(value = "/members/new", consumes = "application/json")
    public void createMember(@RequestBody String args){
        Gson gson = new Gson();
        MemberDto user = gson.fromJson(args, MemberDto.class);

        System.out.println(user);

        String memberId = memberService.join(user);
    }

}
