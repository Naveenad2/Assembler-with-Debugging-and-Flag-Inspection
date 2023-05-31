package com.Assembler.Assembler.backend.services;

import org.springframework.stereotype.Service;

@Service
public class MemmoryArray implements MemmoryArrayService {

  public String[] memmory = new String[8000];

    public String getMemmory(int index) {
        System.out.println("sta working");
        return memmory[index];
    }

    public String setMemmory(String memmory,int index) {
        this.memmory[index] = memmory;
        return "Successfully saved";
    }
}
