package com.Assembler.Assembler.backend.services;

import com.Assembler.Assembler.backend.model.AsmCodeModal;

public interface CodeRunService {


    String RunCode(String[] code);

    String Address(AsmCodeModal address);

    String DeleteMemmory();

}
