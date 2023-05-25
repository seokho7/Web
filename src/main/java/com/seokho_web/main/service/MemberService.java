package com.seokho_web.main.service;

import com.seokho_web.main.dto.MemberDto;
import com.seokho_web.main.entity.Member;

public interface MemberService {
    String join(MemberDto memberDto);
    boolean nickNameCheck(String userNickname);
    boolean emailCheck(String userEmail);
}
