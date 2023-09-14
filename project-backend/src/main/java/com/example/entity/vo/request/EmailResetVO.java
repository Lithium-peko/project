package com.example.entity.vo.request;

import jakarta.validation.constraints.Email;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

@Data
public class EmailResetVO {
    @Email
    String email;
    @Length(max = 6, min = 6)
    String code;
    @Length(max = 20, min = 5)
    String password;
}
