package com.seokho_web.main.repository;

import com.seokho_web.main.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, String> {
    boolean existsByUserNickname(String userNickname);
    boolean existsByUserEmail(String userEmail);

}
