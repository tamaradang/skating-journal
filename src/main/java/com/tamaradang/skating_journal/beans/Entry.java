package com.tamaradang.skating_journal.beans;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Document
public class Entry {
    
    @Id
    private String id;

    @NotBlank
    @Getter
    @Setter
    private String title;

    @NotBlank
    @Getter
    @Setter
    private String content;
}
