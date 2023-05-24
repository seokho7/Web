package com.seokho_web.main.dto;

import jdk.jfr.Timestamp;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashMap;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor

// front to spring

public class MemberDto {

    private String userEmail;
    private String userPw;
    private String userNickname;
    private String userPhone;



    // 클라이언트와 주고 받을 거라 이런 값은 애당초 필요가 없다.
//    private String MEMBER_ID;
//    private int USER_STATE = 1;
//    private Timestamp CREATE_DTM;
//    private int GARDE_ID = 1;

}
