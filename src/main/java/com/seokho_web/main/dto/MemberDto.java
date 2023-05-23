package com.seokho_web.main.dto;

import jdk.jfr.Timestamp;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberDto {
    private String MEMBER_ID;
    private String USER_EMAIL;
    private String USER_PW;
    private String USER_NICKNAME;
    private String USER_PHONE;
    private int USER_STATE = 1;
    private Timestamp CREATE_DTM;
    private int GARDE_ID = 1;

}
