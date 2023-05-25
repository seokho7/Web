package com.seokho_web.main.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.seokho_web.main.dto.MemberDto;
import com.seokho_web.main.repository.MemberRepository;
import com.seokho_web.main.service.MemberService;
import lombok.RequiredArgsConstructor;
//import org.springframework.boot.json.GsonJsonParser;
//import org.springframework.stereotype.Controller;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/")
    public String Home() {
        return "Home";
    }

    @PostMapping(value = "/members/checkNickname")
    public boolean checkNickname(@RequestBody String userNickname){
        return memberService.nickNameCheck(userNickname);
    }

    @PostMapping(value = "/members/checkUserEmail")
    public boolean checkUserEmail(@RequestBody String userEmail){
        return memberService.emailCheck(userEmail);
    }

    @PostMapping(value = "/members/new")
    public String createMember(@RequestBody MemberDto memberDto) {

        String memberId = memberService.join(memberDto);
        if(memberId != null){
            return "성공";
        }else{
            return "실패";
        }
    }

}