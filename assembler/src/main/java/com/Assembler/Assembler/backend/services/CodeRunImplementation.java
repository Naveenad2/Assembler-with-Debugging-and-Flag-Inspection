package com.Assembler.Assembler.backend.services;

import com.Assembler.Assembler.backend.model.AsmCodeModal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CodeRunImplementation implements CodeRunService {


    @Autowired
    MemmoryArrayService memmoryArray;

    //Microprocessor Flag Registers

    public byte[] FlagRegisters = new byte[5];

    public byte SignFlag = 0;
    public byte ZeroFlag = 0;
    public byte AuxiliaryFlag = 0;
    public byte ParityFlag = 0;
    public byte CarryFlag = 0;

    //LXI Increment variable
    public int LxiAddress= 0;
    public int Accumulator = 0;
    public int B = 0;
    public int C = 0;
    public int M = 0;
    public int E = 0;

    @Override
    public String RunCode(String[] code) {

        for(int i = 0; i<code.length; i++){

          // System.out.println(code[i].toLowerCase());

            if(code[i].substring(0, 3).toLowerCase().equals("mvi")) {

                switch (code[i].substring(0, 5).toLowerCase()) {

                    case "mvi a":
                        Accumulator = Integer.parseInt(code[i].substring(6, code[i].length()));
                       // System.out.println(Accumulator);
                       // System.out.println("A working");
                        ParityFlagCheck(Accumulator);

                        break;

                    case "mvi b":
                        B = Integer.parseInt(code[i].substring(6, code[i].length()));
                      //  System.out.println(B);
                      //  System.out.println("B working");
                        ParityFlagCheck(B);
                        break;

                    case "mvi c":
                        C = Integer.parseInt(code[i].substring(6, code[i].length()));
                        ParityFlagCheck(C);
                        break;

                    case "mvi m":
                        M = Integer.parseInt(code[i].substring(6, code[i].length()));
                        ParityFlagCheck(M);
                        break;

                    case "mvi e":
                        E = Integer.parseInt(code[i].substring(6, code[i].length()));
                        ParityFlagCheck(E);
                        break;



                }

            } else if (code[i].substring(0, 3).toLowerCase().equals("mov")) {

                switch (code[i].substring(0,7)){

                    case "mov a,b":
                        Accumulator = B;
                        break;
                    case "mov a,c":
                        Accumulator = C;
                        break;
                    case "mov a,m":
                        Accumulator = M;
                        break;
                    case "mov a,e":
                        Accumulator = E;
                        break;

                    case "mov b,a":
                        B = Accumulator;
                        break;
                    case "mov b,c":
                        B = C;
                        break;
                    case "mov b,m":
                        B = M;
                        break;
                    case "mov b,e":
                        B = E;
                        break;

                    case "mov c,a":
                        C = Accumulator;
                        break;
                    case "mov c,b":
                        C = B;
                        break;
                    case "mov c,m":
                        C = M;
                        break;
                    case "mov c,e":
                        C = E;
                        break;
                }

            } else if (code[i].substring(0, 3).toLowerCase().equals("add")) {

                switch (code[i].substring(0, 5).toLowerCase()){

                    case "add b":
                        Accumulator += B;
                     //   System.out.println("Add working");
                        break;
                    case "add c":
                        Accumulator += C;
                        break;
                    case "add m":
                        Accumulator += M;
                        break;
                    case "add e":
                        Accumulator += E;
                        break;
                }


            }

            else if (code[i].substring(0, 3).toLowerCase().equals("sub")) {

                switch (code[i].substring(0, 5).toLowerCase()){

                    case "sub b":
                        Accumulator -= B;
                     //   System.out.println("Add working");
                        break;
                    case "sub c":
                        Accumulator -= C;
                        break;
                    case "sub m":
                        Accumulator -= M;
                        break;
                    case "sub e":
                        Accumulator -= E;
                        break;
                }
                if(Accumulator<0){
                    SignFlag=1;
                    CarryFlag=1;

                }else{
                    SignFlag=0;
                    CarryFlag=0;
                }
                if (Accumulator==0) {
                    ZeroFlag=1;

                }else{
                    ZeroFlag=0;
                }
                if (Accumulator%2!=0){
                    ParityFlag=1;

                }else {
                    ParityFlag=0;
                }

            }

            else if (code[i].substring(0,3).toLowerCase().equals("sta")) {

                memmoryArray.setMemmory(Integer.toHexString(Accumulator),Integer.parseInt(code[i].substring(4, code[i].length())));

               // System.out.println(Integer.parseInt(code[i].substring(4, code[i].length())));

            } else if (code[i].substring(0,3).toLowerCase().equals("lda")) {

                Accumulator = Integer.parseInt(memmoryArray.getMemmory(Integer.parseInt(code[i].substring(4, code[i].length()))));

            }
            else if (code[i].substring(0,3).toLowerCase().equals("lxi")) {

                memmoryArray.setMemmory(Integer.toHexString(Accumulator),Integer.parseInt(code[i].substring(6, code[i].length())));
                LxiAddress=Integer.parseInt(code[i].substring(6, code[i].length()));
                // System.out.println(Integer.parseInt(code[i].substring(4, code[i].length())));
            }
            else if (code[i].substring(0,3).toLowerCase().equals("inx")) {

                LxiAddress=Integer.parseInt(code[i].substring(6, code[i].length()))+1;

                memmoryArray.setMemmory(Integer.toHexString(Accumulator),LxiAddress);

                // System.out.println(Integer.parseInt(code[i].substring(4, code[i].length())));
            }
        }
        return String.valueOf(SignFlag)+String.valueOf(ZeroFlag)+String.valueOf(AuxiliaryFlag)+String.valueOf(ParityFlag)+String.valueOf(CarryFlag);
    }

    @Override
    public String Address(AsmCodeModal address) {
      //  System.out.println(address.getAssemblyCode());
       // System.out.println(memmoryArray.getMemmory(Integer.parseInt(address.getAssemblyCode())));
        return memmoryArray.getMemmory(Integer.parseInt(address.getAssemblyCode()));
    }

    @Override
    public String DeleteMemmory() {
        SignFlag = 0;
        ZeroFlag = 0;
        AuxiliaryFlag = 0;
        ParityFlag = 0;
        CarryFlag = 0;
        return "Successfully cleared";
    }

    public void ParityFlagCheck(int value){
        if (value%2!=0){
            ParityFlag=1;

        }else {
            ParityFlag=0;
        }
    }
}
