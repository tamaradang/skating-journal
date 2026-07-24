package com.tamaradang.skating_journal.beans;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.mongodb.lang.NonNull;

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

    @NonNull
    @Getter
    @Setter
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate practiceDate;

    @NonNull
    @Getter
    @Setter
    private String title;

    @NonNull
    @Getter
    @Setter
    private String notes;
}
