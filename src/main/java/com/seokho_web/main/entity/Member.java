package com.seokho_web.main.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity                 // 엔티티 선언
@Table(name = "MEMBER") // 엔티티와 매핑할 테이플 지정

@Data                   // get, set 한방에 클리어
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class Member {

    @Id
    @Column(name = "MEMBER_ID")
    private String memberId;

    @Column(name = "USER_NICKNAME")
    private String userNickname;

    @Column(name = "USER_EMAIL")
    private String userEmail;

    @Column(name = "USER_PW")
    private String userPw;

    @Column(name = "USER_PHONE")
    private String userPhone;

    @Column(name = "USER_STATE")
    private int userState;

    @Column(name = "CREATE_DTM")
    private Timestamp createDtm;

    @Column(name = "GRADE_ID")
    private int gradeId;

    // 생성자, getter, setter 등의 메서드들을 추가할 수 있습니다.
    // ...
}
