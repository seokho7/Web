package com.seokho_web.main.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberDto {
    private String USER_EMAIL;
    private String USER_PW;
    private String USER_NICKNAME;
    private String USER_PHONE;

}
