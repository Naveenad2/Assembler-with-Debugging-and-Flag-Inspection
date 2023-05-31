package com.Assembler.Assembler.backend.controller;


import com.Assembler.Assembler.backend.entity.Code;
import com.Assembler.Assembler.backend.model.AsmCodeModal;
import com.Assembler.Assembler.backend.model.CodeModalSave;
import com.Assembler.Assembler.backend.model.InputMemmorAndValue;
import com.Assembler.Assembler.backend.services.AsmIdeService;
import com.Assembler.Assembler.backend.services.CodeRunService;
import com.Assembler.Assembler.backend.services.MemmoryArrayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


//Here is where all the ide or code related api is called


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/")
public class AsmCodeController {

    @Autowired
    private final AsmIdeService asmIdeService;

    @Autowired
    private CodeRunService codeRunService;

    @Autowired
    private MemmoryArrayService memmoryArrayService;

   public AsmCodeController(AsmIdeService asmIdeService){


       this.asmIdeService = asmIdeService;
       this.codeRunService = codeRunService;
   }

   @PostMapping("/run")
    public String RunCode(@RequestBody AsmCodeModal code){

       return asmIdeService.CodeInsert(code);
    }
    @PostMapping("/getAdd")
    public String GetAddress(@RequestBody AsmCodeModal Address){

       return codeRunService.Address(Address);
    }

    @PostMapping("/setMemmoryValue")
    public String AddValueToMemmory(@RequestBody InputMemmorAndValue inputMemmorAndValue){
        return memmoryArrayService.setMemmory(inputMemmorAndValue.getValue(),Integer.parseInt(inputMemmorAndValue.getMemmory()));
    }
    @GetMapping("/ClearAll")
    public String DeleteMemmory(){
       return codeRunService.DeleteMemmory();
    }


    @PostMapping("/SaveCode")
    public String SaveCode(@RequestBody CodeModalSave code){
       return asmIdeService.SaveCode(code);

    }


    @GetMapping("/GetAllProject")
    public List<Code> GetAllProjects(){
       return asmIdeService.ShowAllProject();

    }

    @GetMapping("/getcodewithid/{id}")
    public Optional<Code> GetCodeWithId(@PathVariable("id") long id){
       System.out.println(id);
       return asmIdeService.GetCodeWithId(id);
    }


}
