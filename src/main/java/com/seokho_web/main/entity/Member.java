package com.seokho_web.main.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "MEMBER")
public class Member {
    String uuid = UUID.randomUUID().toString();

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    // use
    private String MEMBER_ID;

    @Column(name = "USER_EMAIL",nullable = false , unique = true)
    // use
    private String USER_EMAIL;

    @Column (name = "USER_PW",nullable = false, unique = true)
    // use
    private String USER_PW;

    @Column (name = "USER_NICKNAME",nullable = false, unique = true)
    // use
    private String USER_NICKNAME;

    @Column (name = "USER_PHONE", nullable = false, unique = true)
    // use
    private String USER_PHONE;

    @Column (name = "USER_STATE" , nullable = false  ,
            insertable = false, updatable = false, columnDefinition = "boolean default true")
    private boolean USER_STATE;

    @Column
    private String CREATE_DTM;

    @Column (name = "GRADE_ID", nullable = false
            ,insertable = false, updatable = false, columnDefinition = "Integer default 1")
    private Integer GARDE_ID;

}
