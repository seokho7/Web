package com.seokho_web.main.service.impl;

import com.seokho_web.main.dto.MemberDto;
import com.seokho_web.main.entity.Member;
import com.seokho_web.main.repository.MemberRepository;
import com.seokho_web.main.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;
import java.util.UUID;

@Service    // 서비스를 명시
@RequiredArgsConstructor    // 밑에 MemberRepository 의 생성자를 사용하지 않는다.
public class MemberServiceImpl implements MemberService {
    private final MemberRepository memberRepository;

    @Override
    public String join(MemberDto memberDto){

        Member member = Member.builder()
                .memberId(UUID.randomUUID().toString())
                .userEmail(memberDto.getUserEmail())
                .userPw(memberDto.getUserPw())
                .userNickname(memberDto.getUserNickname())
                .userPhone(memberDto.getUserPhone())
                .userState(1)
                .createDtm(new Timestamp(System.currentTimeMillis()))
                .gradeId(1)
                .build();
        System.out.println("JOIN BEFORE" + member);
        return memberRepository.save(member).getMemberId();
    }


}
