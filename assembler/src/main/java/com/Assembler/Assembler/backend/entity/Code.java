package com.Assembler.Assembler.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="Code")
public class Code {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name="projectName")
    private String projectName;

    @Column(name ="mnemonic")
    private String CodeMnmoncis;

}
