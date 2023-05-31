package com.Assembler.Assembler.backend.services;

import com.Assembler.Assembler.backend.entity.Code;
import com.Assembler.Assembler.backend.model.AsmCodeModal;
import com.Assembler.Assembler.backend.model.CodeModalSave;

import java.util.List;
import java.util.Optional;

public interface AsmIdeService {

    public String CodeInsert(AsmCodeModal code);

    public String SaveCode(CodeModalSave code);

    public List<Code> ShowAllProject();

    Optional<Code> GetCodeWithId(long id);
}
