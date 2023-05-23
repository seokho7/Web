package com.seokho_web.main.service.impl;

import com.seokho_web.main.dto.MemberDto;
import com.seokho_web.main.entity.Member;
import com.seokho_web.main.repository.MemberRepository;
import com.seokho_web.main.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.UUID;

@Service    // 서비스를 명시
@RequiredArgsConstructor    // 밑에 MemberRepository 의 생성자를 사용하지 않는다.
public class MemberServiceImpl implements MemberService {
    private final MemberRepository memberRepository;

    @Override
    public String join(MemberDto memberDto){
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        Member member = Member.builder()
                .MEMBER_ID(UUID.randomUUID().toString())
                .USER_EMAIL(memberDto.getUSER_EMAIL())
                .USER_PW(memberDto.getUSER_PW())
                .USER_NICKNAME(memberDto.getUSER_NICKNAME())
                .USER_PHONE(memberDto.getUSER_PHONE())
                .USER_STATE(1)
                .CREATE_DTM(timestamp)
                .GARDE_ID(1)
                .build();
        return memberRepository.save(member).getMEMBER_ID();
    }
}
