package com.Assembler.Assembler.backend.services;

import com.Assembler.Assembler.backend.entity.Code;
import com.Assembler.Assembler.backend.model.AsmCodeModal;
import com.Assembler.Assembler.backend.model.CodeModalSave;
import com.Assembler.Assembler.backend.repository.CodeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AsmIdeServiceImplementation implements AsmIdeService{

    @Autowired
    private CodeRunService codeRunService;

    @Autowired
    private CodeRepository codeRepository;

    @Override
    public String CodeInsert(AsmCodeModal code) {
        String[] CodeArray = code.getAssemblyCode().toString().split("\n");
        String returnValue = codeRunService.RunCode(CodeArray);

        return returnValue;
    }

    @Override
    public String SaveCode(CodeModalSave code) {

        Code newCode = new Code();
        BeanUtils.copyProperties(code,newCode);
        codeRepository.save(newCode);

        return "saved";
    }

    @Override
    public List<Code> ShowAllProject() {
        return codeRepository.findAll();
    }

    @Override
    public Optional<Code> GetCodeWithId(long id) {
        System.out.println(id);
        return codeRepository.findById(id);
    }
}
